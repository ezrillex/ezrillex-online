<script>
    import Episode from "../video/Episode.svelte";
    import AskDecrypt from "../../components/encryption/AskDecrypt.svelte";
    import dataStore from "../../stores/dataStore";
    import { Button } from "sveltestrap";
    import { fade } from "svelte/transition";
    export let params;
</script>

<main in:fade={{ duration: 500 }}>
    <div class="container">
        {#if !$dataStore.encrypted}
            <br />
            <div class="row">
                <div class="col-sm-4">
                    <div class="text-center">
                        <img
                            class="img-fluid"
                            src="images/posters/{$dataStore.series[params.id]
                                .poster}"
                            alt="Poster de {$dataStore.series[params.id].name}"
                        />
                    </div>
                    <br />
                    <div class="d-flex justify-content-center">
                        <Button href="#/series/" color="dark"
                            >Go back to Series</Button
                        >
                    </div>
                </div>
                <div class="col-sm-8">
                    <div>
                        {#each $dataStore.series[params.id].episodes as episode}
                            <Episode {episode} {params} />
                        {/each}
                    </div>
                </div>
            </div>
        {:else}
            <AskDecrypt />
        {/if}
    </div>
</main>
