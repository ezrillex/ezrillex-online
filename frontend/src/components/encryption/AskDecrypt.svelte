<script>
    import dataStore from "../../stores/dataStore";
    import { Button } from "sveltestrap";
    let password = $dataStore.mykey;

    const fetchData = async () => {
        const response = await fetch("/data.txt");
        return await response.text();
    };

    async function AttemptDecrypt() {
        // save submitted password as key, clear password field
        $dataStore.mykey = password;

        const data = await fetchData();

        var decrypted;
        try {
            decrypted = CryptoJS.AES.decrypt(data, password).toString(
                CryptoJS.enc.Utf8
            );
        } catch (error) {
            // error means key is wrong, so lets clear it on backend as well
            password = "";
            $dataStore.mykey = ""; 
            return;
        }

        decrypted = await JSON.parse(decrypted);
        dataStore.set(decrypted);
    }

    if ($dataStore.mykey != "") AttemptDecrypt();
</script>

<div>
    {#if $dataStore.mykey == ""}
        <p>Data is encrypted!</p>
        <p>Input the password to continue:</p>
        <input bind:value={password} type="text" />
        <Button on:click={AttemptDecrypt}>Decrypt</Button>
    {/if}
</div>
