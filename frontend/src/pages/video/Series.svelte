<script>
    import { fade } from "svelte/transition";
    import AskDecrypt from "../../components/encryption/AskDecrypt.svelte";
    import dataStore from "../../stores/dataStore";
    import {  Picture } from "svelte-lazy-loader"
</script>

<main in:fade={{ duration: 500 }}>
    <div class="container mt-4">
        {#if !$dataStore.encrypted}
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {#each $dataStore.series as { id, poster }}
                    <div class="col">
                        <a class="card d-inline-block m-3" href="#/series/{id}">
                            <div class="card">
                                <!--It is better I guess they at least don't jump around but theres not much in terms of progressive loading in svelte-->
                                <Picture
                                    class="card-img-top"
                                    alt="..."
                                    placeholder="images/posters/{poster}?w=100&jpg&blur=10"
                                >
                                    <source
                                        data-srcset="images/posters/{poster}?format=webp;avif;jpg&metadata" type="image/jpeg"
                                    />
                                </Picture>
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
