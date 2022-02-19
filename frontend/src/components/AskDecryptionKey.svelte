<script>
    import {Button} from 'sveltestrap'
    import dataStore from '../stores/dataStore'
    let password = "";

    const fetchData = (async () => {
        const response = await fetch("/data.txt");
        return await response.text();
    });

    async function AttemptDecrypt(){

        const data = await fetchData();

        var decrypted = CryptoJS.AES.decrypt(data, password).toString(CryptoJS.enc.Utf8);

        decrypted = await JSON.parse(decrypted);

        if(decrypted.encrypted === false){
            dataStore.set(decrypted);
        }

        $dataStore.key = password;
        password = ""
    }
</script>

<main>
    <p>Input the password to continue:</p>
    <input bind:value={password} type="text">
    <Button on:click={AttemptDecrypt} >Decrypt</Button>
</main>
