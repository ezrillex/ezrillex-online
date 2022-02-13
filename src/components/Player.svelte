<script>
    import TorrentVideoPlayer from "./TorrentVideoPlayer.svelte";

    export let params;

    const fetchData = (async () => {
        const response = await fetch("/data.json");
        return await response.json();
    })();
</script>

<main>
    {#await fetchData}
        <p>Loading data...</p>
    {:then data}
        <div class="container">
            
            <br />

            <div class="jumbotron">
                <h1 class="text-center">{data.series[params.id].name}</h1>
            </div>

            <TorrentVideoPlayer
                magnet={data.series[params.id].episodes[params.order].magnet}
            />

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
                    <a class="btn btn-outline-dark " href="list.php?id=<?php echo $metadata[0] ?>;">Regresar a Lista</a>
                </div>
                
                {#if params.order + 1 < data.series[params.id].episodes.length}
                    <a
                        href="#/series/{params.id}/{params.order + 1}"
                        type="button"
                        class="col btn btn-dark bg-black m-2">Siguiente</a
                    >
                {/if}
            </div>
        </div>
    {:catch error}
        <p>An error occurred!</p>
    {/await}
</main>
