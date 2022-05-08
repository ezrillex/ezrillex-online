<script>
    import {onDestroy} from 'svelte'

    export let params;

    const fetchLink = async () => {
        const response = await fetch(
            "https://abarca.dev/api/v1/link/" + params.sauce
        );
        if (response.status == 200) {
            return await response.json();
        } else {
            throw "ERROR 404";
        }
    };

    let iid = undefined;

    function startCountdown(url){
        iid= setInterval(()=>{countdown(url)}, 1000)
        return "";
    }

    onDestroy(()=>{
        if(iid != undefined){
            clearInterval(iid)

        }
    })

    function countdown(url){
        
        if(seconds_left <= 0){
            window.location.href = url
        }else{
            seconds_left -= 1;
        }
    }

    let seconds_left = 5;

</script>

<main class="container text-center">
    {#key params.sauce}
      
        {#await fetchLink()}
            <h2>Loading...</h2>
        {:then data}
            {startCountdown(data.url)}
            <h2>Redirecting you in {seconds_left} seconds...</h2>
            <h5>If the redirect didn't work <a href="{data.url}">click here.</a></h5>
        {:catch error}
            <h2>Short link was not found.</h2>
            <h4>Short codes are case-sensitive.</h4>
        {/await}
    {/key}
</main>
