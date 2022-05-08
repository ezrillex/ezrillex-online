<script>
    import { Popover } from "sveltestrap";

    let link = "";
    let status = "Working...";
    let shortened = "https://abarca.dev/#/link/";
    
    async function createLink() {
        if (isValidHttpUrl(link)) {
            status = "Working...";

            const api = "https://abarca.dev/api/v1/create_short_url/";
            await fetch(api, {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "url": link }),
            }).then(async(res) => {
                if (res.status == 200) {
                    shortened =  "https://abarca.dev/#/link/" + (await res.json()).sauce
                    await navigator.clipboard.writeText(shortened)
                    status = "Link copied to clipboard!";
                }else{
                    status = "An error ocurred :c"
                }
            });
        } else {
            status = "Error: Invalid link.";
        }
    }

    function isValidHttpUrl(string) {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }
</script>

<main class="container text-center  ">
    <h1>Shorten a URL</h1>
    <input bind:value={link} class="w-75" type="url" name="link" id="link" /><br
    />
    <Popover placement="bottom" target="submit-btn" dismissible>
        <p>{status}</p>
    </Popover>
    <button
        class="m-2 btn btn-dark"
        on:click={createLink}
        id="submit-btn"
        type="submit">Shorten!</button
    >
    {#if status == "Link copied to clipboard!" }
        <h3>Your link is: <a href={shortened}>{shortened}</a></h3>
    {/if}
</main>


