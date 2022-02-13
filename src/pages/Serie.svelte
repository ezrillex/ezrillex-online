<script>
    import Episode from '../components/Episode.svelte';

    export let params;


    const fetchData = (async () => {
        const response = await fetch("/data.json");
        return await response.json();
    })();
</script>

<main>
    <div class="container">
        <br>
        <div class="row">
            {#await fetchData}
                <p>Loading data...</p>
            {:then data}
                <div class="col-sm-4">
                    <div>
                        <img class="img-fluid" src="images/posters/{data.series[params.id].poster}" alt="Poster de {data.series[params.id].name}"/>
                    </div>
        
                </div>
                <div class="col-sm-8">
                    <div>
                        {#each data.series[params.id].episodes as episode}
                            <Episode {episode} {params} />
                        {/each}
                    </div>
                </div>
            {:catch error}
                <p>An error occurred!</p>
            {/await}
        </div>

    </div>
    
    
    
</main>