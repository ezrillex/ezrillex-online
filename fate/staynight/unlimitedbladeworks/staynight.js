var eps = ["https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222700&authkey=ANsyNVzF4hOb5ws",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222696&authkey=AEwNCGvKqgNNPz4",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222695&authkey=AFEFucYX1kcpui4",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222698&authkey=ABmvsBrOWNgeVQc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222699&authkey=ABtcZZecesjUDFw",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222693&authkey=ANRU2WDYgiGW1ug",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222694&authkey=AFmUqTHzPvTToJM",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222697&authkey=AC_B9QebPw2f1_4",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222701&authkey=ANHSFrdmJsBBeUM",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222702&authkey=ADBa9WNUTGDq-_k",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222703&authkey=AIdbafwFQJ6Rqzo",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222705&authkey=ALWDEv0tsKwVDCI",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222706&authkey=AFZM5FfK88_hagM",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222704&authkey=AOUW5qDpRIfQ3VE",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222708&authkey=ABipPc_yX1jyook",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222707&authkey=AE9xss9YFBsQ19I",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222709&authkey=AMv6fhafg4NJ7oM",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222710&authkey=ADUpUENHjQEdY38",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222712&authkey=AD3mvb9kc21RrVw",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222711&authkey=AHbZBPwOKr01NZU",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222713&authkey=AHV0aPz8R7Rgjf0",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222714&authkey=ABlLDfhWrCv7THY",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222715&authkey=ALyHoTBcC2q-9xc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222716&authkey=AKPzPGuC2ey9A4c",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222717&authkey=AL_acOeplTTohfw",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222718&authkey=AH5xPIniD_N3a80",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222744&authkey=AHHKTEeUHN6VYKw"
]

let titulos = [];
for(let i = 0; i < eps.length; i++){
    titulos.push("Fate/Stay Night: Unlimited BladeWorks")
}

let descriptores = [];
for(let i = 0; i < eps.length; i++){
    descriptores.push("Episodio " + i);
}

let currentEp = 0;

var episodeParams = new UpdateEpisodeParams("fatestaynightunlimitedbladeworks", eps, titulos, descriptores, "VideoSource", "VideoPlayer", "bAnt", "bSig", "EpisodeNumber", "Titulo");

// auto plays the next episode
function episodeEnded(){
    updateEpisode(1, currentEp, episodeParams);
}

function ChangeEpisode(delta) {
    currentEp = updateEpisode(delta, currentEp, episodeParams);
}

// cookies is the only shit that gives problems
function Startup(){
    // load site wide css/tags and the navbar
    $(function(){
        $("<div>").load("../../../sitewide.html").unwrap().appendTo("#headTag");
        $("#navigation").load("../../../navbar.html");
        $("#footerTag").load("../../../footer.html");
    });
    ChangeEpisode(0);
    document.getElementById("VideoPlayer").addEventListener('ended', episodeEnded,false);
}

