<script>
    import { fade } from "svelte/transition";
    const fetchPosts = async () => {
        const response = await fetch(
            "https://abarca.dev/wordpress/wp-json/wp/v2/posts"
        );
        return await response.json();
    };
</script>

<main>
    <div class="container">
        <br />
        <h1 class="text-center">Blog</h1>
        <div in:fade={{ duration: 500 }}>
            {#await fetchPosts()}
                <h1>Loading...</h1>
            {:then data}
                {#each data as post}
                    <a class="link-dark" href="#/blog/{post.id}">
                        <h1>{post.title.rendered}</h1>
                    </a>
                    <h6>{new Date(post.date).toLocaleString()}</h6>
                    {@html post.excerpt.rendered}
                {/each}
            {/await}
        </div>
    </div>
</main>
