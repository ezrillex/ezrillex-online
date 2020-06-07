function checkForOGSteinsGateLastEpisode(){
    let c = Cookies.get("lastEpisode");
    if(c !== undefined){
        c = parseInt(c);
        Cookies.remove("lastEpisode");
        Cookies.set("steinsgate",c, {expires:365});
    }
}

function checkForOGEpisodeIndexing(seriesName) {
    var url = new URL(window.location.href);
    if(url.searchParams.get('index') != null){
        const a = parseInt(url.searchParams.get('index'));
        url.searchParams.delete("index");
        window.location.href = url.href; // you idiot, this is the second time you forget to do this
        Cookies.set(seriesName, a.toString(), {expires: 365}); // overwrites current episode with link's one
    }
}