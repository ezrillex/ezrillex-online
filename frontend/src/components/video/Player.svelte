<script>
    import { fade } from "svelte/transition";
    import VideoPlayer from "./VideoPlayer.svelte";
    import AskDecrypt from "../encryption/AskDecrypt.svelte";
    import dataStore from "../../stores/dataStore";
    import { push } from "svelte-spa-router";

    export let params;

    function handleEnd() {
        if (
            parseInt(params.order) + 1 <
            $dataStore.series[params.id].episodes.length
        ) {
            push("/series/" + params.id + "/" + (parseInt(params.order) + 1));
        }
    }
    const tracker = "watched_" + params.id + "_" + params.order;
</script>

<main in:fade={{ duration: 500 }}>
    <div class="container">
        {#if !$dataStore.encrypted}
            <br />

            <div class="jumbotron">
                <h1 class="text-center">{$dataStore.series[params.id].name}</h1>
            </div>

            {#key $dataStore.series[params.id].episodes[params.order].url}
                <VideoPlayer
                    url={$dataStore.series[params.id].episodes[params.order]
                        .url}
                    on:episodeEnded={handleEnd}
                    {tracker}
                />
            {/key}

            <br />

            <div class="d-flex align-items-center justify-content-center">
                {#if params.order - 1 >= 0}
                    <a
                        href="#/series/{params.id}/{params.order - 1}"
                        type="button"
                        class="btn btn-dark bg-black m-2">Anterior</a
                    >
                {/if}
                <div class="">
                    <a
                        class="btn btn-outline-dark "
                        href="#/series/{params.id}/">Regresar a Lista</a
                    >
                </div>
                {#if parseInt(params.order) + 1 < $dataStore.series[params.id].episodes.length}
                    <a
                        href="#/series/{params.id}/{parseInt(params.order) + 1}"
                        type="button"
                        class="btn btn-dark bg-black m-2">Siguiente</a
                    >
                {/if}
            </div>
        {:else}
            <AskDecrypt />
        {/if}
    </div>
</main>
