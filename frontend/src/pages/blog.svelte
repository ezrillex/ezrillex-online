<script>
    import { fade } from "svelte/transition";
    import blogStore from "../stores/blogStore";

    let reading = -1;
    let content = {};

    const fetchPosts = async () => {
        if($blogStore.length >0){
            return $blogStore;
        }
        const response = await fetch(
            "https://abarca.dev/wordpress/wp-json/wp/v2/posts"
        );
        let temp = await response.json();
        $blogStore=temp;
        return $blogStore;
    };

    function read(id, post) {
        reading = id;
        content = post;
    }
</script>

<main>
    <div in:fade={{ duration: 500 }} class="container">
        <br />
        <h1 class="text-center">Blog</h1>
        <br />

        {#await fetchPosts()}
            <h1>Loading...</h1>
        {:then data}
            {#if reading < 0}
                <div in:fade={{ duration: 500 }}>
                    {#each data as post}
                        <a
                            class="link-dark"
                            href="#/blog"
                            on:click|preventDefault={() =>
                                read(post.id, post.content)}
                        >
                            <h1>{post.title.rendered}</h1>
                        </a>
                        <h6>{new Date(post.date).toLocaleString()}</h6>
                        {@html post.excerpt.rendered}
                    {/each}
                </div>
            {/if}
            {#if reading >= 0}
                <div in:fade={{ duration: 500 }}>
                    {@html content.rendered}
                    <div class="d-flex justify-content-center">
                        <button
                            class="btn btn-dark "
                            on:click|preventDefault={() => read(-1)}
                            >Go back to posts.</button
                        >
                    </div>
                </div>
            {/if}
        {/await}

        <br />
        <br />
    </div>
</main>
