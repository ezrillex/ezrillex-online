var eps = ["https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222743&authkey=APYQ9FqL-u5Xjd8",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222742&authkey=AH6wab_YA5sjAhc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222737&authkey=ACyLrxIzumkT_mA",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222740&authkey=ADaAKGopwjEnONg",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222741&authkey=APFGhhaGlYpM4TU",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222739&authkey=AO0fVcBhn6uU9us",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222738&authkey=AHyu9yKAk4HgTNU",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222735&authkey=AEhVkcrVLAuRIzQ",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222736&authkey=AI0S8IsXVVajTNo",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222733&authkey=ACIhB_saVNOpA5M",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222732&authkey=AKWVlwUXkEs44FU",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222730&authkey=AK-w-mYqRPld9mk",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222729&authkey=APKaPYTDrouNkB8",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222734&authkey=ABZ4JwtE6HM6hnQ",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222727&authkey=AAph0MQTg5s2mBs",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222731&authkey=ANMrf9J5CmT7ndM",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222728&authkey=ADn6JDH6piZG0Qc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222721&authkey=ALrohZ8bnWRY56g",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222726&authkey=AI52R1kJMn92TGc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222723&authkey=AGOzhoswLgXFe4U",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222724&authkey=AEzoBxxrLN3rjh4",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222722&authkey=ADlMLF_1-FtXOoY",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222725&authkey=AD4hL58MIQsAjhs",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222720&authkey=ADbUfAZS_JZ1vh4",
]

let titulos = [];
for(let i = 0; i < eps.length; i++){
    titulos.push("Fate/Stay Night")
}

let descriptores = [];
for(let i = 0; i < eps.length; i++){
    descriptores.push("Episodio " + i);
}

let currentEp = 0;

var episodeParams = new UpdateEpisodeParams("fatestaynightes", eps, titulos, descriptores, "VideoSource", "VideoPlayer", "bAnt", "bSig", "EpisodeNumber", "Titulo");

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
