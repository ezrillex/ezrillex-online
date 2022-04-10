<script>
    import { fade } from "svelte/transition";

    export let params;

    const fetchPost = async () => {
        const response = await fetch(
            "https://abarca.dev/wordpress/wp-json/wp/v2/posts/" +
                parseInt(params.id)
        );
        return await response.json();
    };
</script>

<main>
    <div class="container">
        <br />
        <h1 class="text-center">Blog</h1>
        <div in:fade={{ duration: 500 }}>
            {#await fetchPost()}
                <h1>Loading...</h1>
            {:then post}
                <h1>{post.title.rendered}</h1>
                <h6>{new Date(post.date).toLocaleString()}</h6>
                {@html post.content.rendered}
            {/await}
        </div>

        <a class="link-dark" href="#/blog">Go back to posts.</a>
    </div>
    <br />
</main>
