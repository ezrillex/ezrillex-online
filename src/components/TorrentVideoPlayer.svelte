<script>
    import { onDestroy } from "svelte";

    export let magnet;
    var torrentId = magnet;

    export var client = new WebTorrent();

    client.add(torrentId, function (torrent) {
        var file = torrent.files.find(function (file) {
            return file.name.endsWith(".mp4");
        });

        file.renderTo("#player");
    });


    onDestroy(() => {
        client.destroy();
    });


</script>

<main>
    <div class="ratio ratio-16x9">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video id="player" controls autoplay />
    </div>
</main>
