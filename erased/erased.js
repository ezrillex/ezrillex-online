var currentEp = 0;
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

let titulos = [];
for(let i = 0; i < eps.length; i++){
    titulos.push("Desaparecida")
}
let descriptores = [];
for(let i = 1; i <= eps.length; i++){
    const epDes = "Episodio "+ i;
    descriptores.push(epDes);
}

const episodeParams = new UpdateEpisodeParams("erased", eps, titulos, descriptores, "VideoSource", "VideoPlayer", "bAnt", "bSig", "EpisodeNumber", "Titulo");

// auto plays the next episode
function episodeEnded(){
    updateEpisode(1, currentEp, episodeParams);
}

function ChangeEpisode(delta) {
    currentEp = updateEpisode(delta, currentEp, episodeParams);
}

function Startup(){
    // load site wide css/tags and the navbar
    $(function(){
        $("<div>").load("../sitewide.html").unwrap().appendTo("#headTag");
        $("#navigation").load("../navbar.html");
        $("#footerTag").load("https://ezrillex.online/footer.html");
    });
    checkForOGEpisodeIndexing('erased');
    ChangeEpisode(0);
    document.getElementById("VideoPlayer").addEventListener('ended', episodeEnded,false);
}

