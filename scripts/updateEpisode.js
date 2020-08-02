class UpdateEpisodeParams
{
    constructor(
        seriesName,
        episodeLinks,
        titles,
        descriptions,
        videoSource,
        videoPlayer,
        previousButton,
        nextButton,
        episodeNumberElement,
        episodeTitleElement
    )
    {
        this.seriesName = seriesName,
            this.episodeLinks = episodeLinks,
            this.titles = titles,
            this.descriptions = descriptions,
            this.videoSource = videoSource,
            this.videoPlayer = videoPlayer,
            this.previousButton = previousButton,
            this.nextButton = nextButton,
            this.episodeNumberElement = episodeNumberElement ,
            this.episodeTitleElement = episodeTitleElement
    }
}

function updateEpisode(episodeDelta, currentEp, eParams) {
    // get episode from cookie if there is one
    var lastEp = Cookies.get(eParams.seriesName);

    if(lastEp !== undefined){
        currentEp = parseInt(lastEp);
    }else{
        currentEp = 0;
    }

    if(currentEp + episodeDelta >= 0 && currentEp + episodeDelta < eParams.episodeLinks.length){
        currentEp += episodeDelta;

        var vid = document.getElementById(eParams.videoSource);
        vid.src = eParams.episodeLinks[currentEp];
        var player = document.getElementById(eParams.videoPlayer);
        player.load();
    }

    // ocultar anterior si es el primer elemento
    if(currentEp === 0){
        document.getElementById(eParams.previousButton).style.visibility = "hidden";
    }
    else{
        document.getElementById(eParams.previousButton).style.visibility = "visible";
    }

    // ocultar siguente si es el ultimo de la lista
    if(currentEp < eParams.episodeLinks.length - 1){
        document.getElementById(eParams.nextButton).style.visibility = "visible";
    }
    else{
        document.getElementById(eParams.nextButton).style.visibility = "hidden";
    }

    // update title and description
    document.getElementById(eParams.episodeTitleElement).innerHTML = eParams.titles[currentEp]; // update title by index
    document.getElementById(eParams.episodeNumberElement).innerHTML = eParams.descriptions[currentEp]; // update description by index

    // guardar ep en la cookie
    Cookies.set(eParams.seriesName, currentEp, {expires: 365});
    return currentEp;
}