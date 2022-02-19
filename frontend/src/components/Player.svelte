<script>
    import VideoPlayer from "./VideoPlayer.svelte";
    import AskDecrypt from "./AskDecrypt.svelte";
    import dataStore from "../stores/dataStore";

    export let params;

  
</script>

<main>
    
        <div class="container">
            {#if !$dataStore.encrypted }
            <br />

            <div class="jumbotron">
                <h1 class="text-center">{$dataStore.series[params.id].name}</h1>
            </div>

            {#key $dataStore.series[params.id].episodes[params.order].url }
                <VideoPlayer
                    url={ $dataStore.series[params.id].episodes[params.order].url}
                />
            {/key}
            

            <br>
            

            <div class="d-flex justify-content-center align-items-center mt-3  row">
                {#if params.order - 1 >= 0}
                    <a
                        href="#/series/{params.id}/{params.order - 1}"
                        type="button"
                        class="col btn btn-dark bg-black m-2">Anterior</a
                    >
                {/if}

                <div class="col text-center">
                    <a class="btn btn-outline-dark " href="#/series/{params.id}/">Regresar a Lista</a>
                </div>
                
                {#if parseInt(params.order) + 1 < $dataStore.series[params.id].episodes.length}
                    <a
                        href="#/series/{params.id}/{parseInt(params.order) + 1}"
                        type="button"
                        class="col btn btn-dark bg-black m-2">Siguiente</a
                    >
                {/if}
            </div>
            {:else}
                <AskDecrypt></AskDecrypt>
            {/if}
        </div>
  
</main>
