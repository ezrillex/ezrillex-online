<script>
    import { fade } from "svelte/transition";
    import VideoPlayer from "./VideoPlayer.svelte";
    import AskDecrypt from "../../components/encryption/AskDecrypt.svelte";
    import dataStore from "../../stores/dataStore";
    import { push } from "svelte-spa-router";
    import Comments from "./comments.svelte";

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

            <h1 class="text-center">{$dataStore.series[params.id].name}</h1>

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
                        class="btn btn-dark bg-black m-2">Previous</a
                    >
                {/if}
                <div class="">
                    <a
                        class="btn btn-outline-dark "
                        href="#/series/{params.id}/">Go back to list</a
                    >
                </div>
                {#if parseInt(params.order) + 1 < $dataStore.series[params.id].episodes.length}
                    <a
                        href="#/series/{params.id}/{parseInt(params.order) + 1}"
                        type="button"
                        class="btn btn-dark bg-black m-2">Next</a
                    >
                {/if}
            </div>
            {#key params}
                <Comments {params} />
            {/key}
        {:else}
            <AskDecrypt />
        {/if}
    </div>
</main>
