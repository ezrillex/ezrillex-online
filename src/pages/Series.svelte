<script>
    const fetchData = (async () => {
        const response = await fetch("/data.json");
        return await response.json();
    })();
</script>

<main>
    <div class="container">
        <div>
            <br />
            <h1 class="text-center display-1">Series</h1>
            <br />
            <div class="card-columns row-cols-3">
                {#await fetchData}
                    <p>Loading data...</p>
                {:then data}
                    {#each data.series as serie}
                        <a class="card d-inline-block m-3" href="#/series/{serie.id}">
                            <!-- link is to episode list -->
                            <img class="card-img-top" src="images/posters/{serie.poster}" alt="Poster de {serie.name}" />
                            <h5 class="card-title text-center pt-2">
                                {serie.name}
                            </h5></a
                        >
                    {/each}
                {:catch error}
                    <p>An error occurred!</p>
                {/await}
                
            </div>
        </div>
    </div>
</main>
