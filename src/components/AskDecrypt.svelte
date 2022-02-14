<script>
    import dataStore from "../stores/dataStore";
    import AskDecryptionKey from "./AskDecryptionKey.svelte";

</script>

<div>
    <p>Data is encrypted!</p>
    {#if $dataStore.key == ""}
        <AskDecryptionKey />
    {:else}
        <p>Encryption key was wrong! try again:</p>
        <AskDecryptionKey />
    {/if}
</div>
