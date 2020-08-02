

// todo clear cache and how do I check if playback is idle because the cache is corrupted

let currentEp = 0;

var episodeParams = new UpdateEpisodeParams("", eps, titulos, descriptores, "VideoSource", "VideoPlayer", "bAnterior", "bSiguiente", "EpisodeNumber", "Titulo");

// auto plays the next episode
function episodeEnded(){
    updateEpisode(1, currentEp, episodeParams);
}

function ChangeEpisode(delta) {
    currentEp = updateEpisode(delta, currentEp, episodeParams);
}