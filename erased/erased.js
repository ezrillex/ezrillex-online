var currentEp = 1;
var eps = ["https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162239&authkey=AOzhxQbOGcsMCxc",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162238&authkey=AGqQM3s4fBZz_R4",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162232&authkey=APNR2awFJO9aD-c",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162237&authkey=AK_XqA7oszbcniA",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162230&authkey=ANNgL5ShmqXIwKA",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162233&authkey=AAW75q1mugmjKRk",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162235&authkey=AC6C3V1NuGemp9Y",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162234&authkey=AE61r-_ouMODFzE",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162231&authkey=AFsuBflvLuAdbh4",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162241&authkey=ABr3x_P4s1IqNqM",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162240&authkey=AGy9WkdclfK9bsU",
"https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21162236&authkey=ACDlGOMenFowJ64"
]
// todo clear cache and how do I check if playback is idle because the cache is corrupted

function updateEpisodio(episode) {

    // conseguir el episodio de la url si hay uno.
    var url = new URL(window.location.href) ;

    if(url.searchParams.get('episodio') != null){
        currentEp = parseInt(url.searchParams.get('episodio')); // como side effect ahora esto guarda el current episode, y lo lee de nuevo de la url cuando cambia de episodio
    }

    if(currentEp + episode > 0 && currentEp + episode <= eps.length){
        currentEp += episode;

        var vid = document.getElementById("VideoSource");
        vid.src = eps[currentEp-1];
        var player = document.getElementById("VideoPlayer");
        player.load();
    }

    if(currentEp === 1){
        document.getElementById("bAnterior").style.visibility = "hidden";
    }
    else{
        document.getElementById("bAnterior").style.visibility = "visible";
    }

    if(currentEp < eps.length){ // menor a doce porque si es doce debe ocultar el boton
        document.getElementById("bSiguiente").style.visibility = "visible";
    }
    else{
        document.getElementById("bSiguiente").style.visibility = "hidden";
    }

    document.getElementById("EpisodioNumero").innerHTML = "Episodio " + (currentEp); // update ep number

    // guardar el episodio en la url
    window.history.pushState(null, null, '?episodio=' + currentEp.toString());
}

// auto plays the next episode
function episodioTermino(e){
    updateEpisodio(1);
}