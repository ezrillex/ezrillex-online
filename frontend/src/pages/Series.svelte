<script>
  import AskDecrypt from '../components/AskDecrypt.svelte';

    import dataStore from '../stores/dataStore'

</script>


    <div class="container">
        {#if !$dataStore.encrypted}
            
            <div>
                <br />
                <h1 class="text-center display-1">Series</h1>
                <br />
                <div class="card-columns row-cols-3">
                    
                    {#each $dataStore.series as serie}
                        <a class="card d-inline-block m-3" href="#/series/{serie.id}">
                            <!-- link is to episode list -->
                            <img class="card-img-top" src="images/posters/{serie.poster}" alt="Poster de {serie.name}" />
                            <h5 class="card-title text-center pt-2">
                                {serie.name}
                            </h5></a
                        >
                    {/each}
                  
                    
                </div>
            </div>
    
        {:else}
            <AskDecrypt></AskDecrypt>
        {/if}
    </div>

