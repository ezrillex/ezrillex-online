<script>
    import dataStore from "../../stores/dataStore";
    import { Button } from "sveltestrap"; // why am I using sveltestrap still?
    import AES from "crypto-js/aes"
    import enc from "crypto-js/enc-utf8"


    let password = $dataStore.mykey;

    const fetchData = async () => {
        const response = await fetch("/data.txt");
        return await response.text();
    };

    async function AttemptDecrypt() {
        
        // save submitted password as key, clean password field
        $dataStore.mykey = password;
        
        const data = await fetchData();

        var decrypted;
        try {
            decrypted = AES.decrypt(data, password).toString(
                enc
            );
        } catch (error) {
            // error means key is wrong, so lets clear it on local storage as well
            password = "";
            $dataStore.mykey = "";
            return;
        }

        decrypted = await JSON.parse(decrypted);
        dataStore.set(decrypted);
    }

    function enterKeyPressed(event) {
      if (event.keyCode == 13) {
         AttemptDecrypt();
      }
   }

   if ($dataStore.mykey != "") AttemptDecrypt();
</script>

<div class="text-center">
    <div class="d-inline-flex justify-content-center ">
        {#if $dataStore.mykey == ""}
            <div class="col">
                <div class="row">
                    <p>This page is private.</p>
                </div>
                <div class="row">
                    <p>Input the password to continue:</p>
                </div>
                <div class="flex-row">
                    <div class="input-group">
                        <input
                            class="me-2 form-control d-inline"
                            placeholder="password"
                            bind:value={password}
                            type="text"
                            on:keyup={enterKeyPressed}
                        />
                        <Button
                            class="d-inline btn btn-dark align-self-end"
                            on:click={AttemptDecrypt}>Decrypt</Button
                        >
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
