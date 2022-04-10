<script>
    import { fade } from "svelte/transition";
    import AskDecrypt from "../../components/encryption/AskDecrypt.svelte";

    import dataStore from "../../stores/dataStore";
</script>

<main in:fade={{ duration: 500 }}>
    <div class="container mt-4">
        {#if !$dataStore.encrypted}
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {#each $dataStore.series as { id, poster }}
                    <div class="col">
                        <a class="card d-inline-block m-3" href="#/series/{id}">
                            <div class="card">
                                <img
                                    src="images/posters/{poster}"
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                        </a>
                    </div>
                {/each}
            </div>
        {:else}
            <AskDecrypt />
        {/if}
    </div>
</main>
