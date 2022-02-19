<script>
    export let params;
    export let episode;
</script>

<div class="card m-2">
    <div class="card-body">
        <h5 class="card-title">{episode.title}</h5>
        <a href="#/series/{params.id}/{episode.order}">Ver Episodio</a>
    </div>
</div>
