<script>
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    let time = 0;
    let duration;
    export let tracker;

    const dispatch = createEventDispatcher();

    export let url;

    if (url == "") {
        console.log("Received empty url, video load failed.");
    }

    function videoEnded() {
        dispatch("episodeEnded");
    }

    $: {
        if (time / duration > 0.9) {
            marked_as_complete = true;
            localStorage.setItem(tracker, true);
        }
    }
</script>

<main in:fade={{ duration: 500 }}>
    <div class="ratio ratio-16x9">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
            bind:currentTime={time}
            bind:duration
            on:ended={videoEnded}
            id="player"
            controls
            autoplay
        >
            <source type="video/mp4" src={url} />
        </video>
    </div>
</main>
