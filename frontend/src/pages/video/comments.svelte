<script>
    export let params;

    let commentText;
    let commentUser;

    let comments = [];

    // "https://localhost:8000/comments/"

    const fetchData = async () => {
        const request_url =
            "https://abarca.dev/api/v1/comments/" +
            parseInt(params.id) +
            "/" +
            parseInt(params.order);

        const response = await fetch(request_url);

        comments = await response.json();
        return comments;
    };

    const post_url =
        "https://abarca.dev/api/v1/comments/" + params.id + "/" + params.order;

    const postComment = () => {
        let the_comment = {
            user: commentUser,
            comment: commentText,
        };

        fetch(post_url, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(the_comment),
        }).then((res) => {
            if (res.status == 403) {
                return;
            }
        });

        comments = [the_comment, ...comments];
        commentText = "";
    };
</script>

<main>
    <!-- Post comment -->
    <div class="card mt-3">
        <div class="card-body">
            <div class="mb-2 d-flex justify-content-between">
                <div class="input-group me-2">
                    <span class="input-group-text">@</span>
                    <input
                        bind:value={commentUser}
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                    />
                </div>
                <button
                    on:click={postComment}
                    type="button"
                    class="btn btn-dark align-self-end">Post</button
                >
            </div>
            <textarea class="form-control" bind:value={commentText} rows="1" />
        </div>
    </div>

    <!-- Show comments -->
    {#await fetchData()}
        <p>Loading comments....</p>
    {:then data}
        <div class="card mt-3 mb-3">
            <div class="card-header">Comments:</div>
            <ul class="list-group list-group-flush">
                {#if comments.length == 0}
                    <li class="list-group-item">No hay comentarios.</li>
                {/if}
                {#each comments as { user, comment }}
                    <li class="list-group-item">
                        <span class="fw-bold">{user}: </span>{comment}
                    </li>
                {/each}
            </ul>
        </div>
    {/await}
</main>
