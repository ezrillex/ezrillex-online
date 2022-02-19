<script>
    export let url;

    if(url == ""){
        url = "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21315908&authkey=ALj0duenWghHZoQ"
    }
</script>

<main>
    <div class="ratio ratio-16x9">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video id="player" controls autoplay>
            <source type="video/mp4" src="{url}"/>
        </video>
    </div>
</main>
