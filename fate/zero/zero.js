var eps = ["https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222691&authkey=AELJIxj1fnCeVW4",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222690&authkey=ADMgSKhfYh0-IV0",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222686&authkey=AAMWfKaKGuQfVAA",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222689&authkey=ABeMI5qmRvUFhuk",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222688&authkey=AEqGvTyD56yEwps",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222685&authkey=ANRL1mMBw-P0yLw",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222683&authkey=AGbCg5i8didjO9s",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222680&authkey=ADsqMlbYfxsE9w0",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222679&authkey=APp1B5vPGbZcHAY",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222678&authkey=AHQwhph4hP4g07k",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222681&authkey=AA3QolDbMdYp9xQ",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222684&authkey=AImtHyvszgOdorw",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222687&authkey=ACPsdVXyJTCoU8g",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222682&authkey=AEoEK3i2kd6eSvI",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222675&authkey=AGk_jjEilCiO-Zg",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222677&authkey=AErEq28_ugkSFeY",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222676&authkey=AJHGn6kYe_L9ez8",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222671&authkey=AJwo7bxqWqyGuF4",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222668&authkey=AHr1869wJnVzunY",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222669&authkey=ANv6elBFsexPlb4",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222670&authkey=AMXPTZyXzXd-6rg",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222673&authkey=AApcPWWIo0u5BDs",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222674&authkey=AFDM5QMwLzyqdmg",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222672&authkey=AIUFacsuqirHQsc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222667&authkey=AIv8UpWyurODdqY",
]

let titulos = [];
for(let i = 0; i < eps.length; i++){
    titulos.push("Fate/Zero");
}
let descriptores = [];
for(let i = 0; i < eps.length; i++){
    descriptores.push("Episodio " + i);
}

let currentEp = 0;

var episodeParams = new UpdateEpisodeParams("fatezero", eps, titulos, descriptores, "VideoSource", "VideoPlayer", "bAnt", "bSig", "EpisodeNumber", "Titulo");

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
        $("<div>").load("../../sitewide.html").unwrap().appendTo("#headTag");
        $("#navigation").load("../../navbar.html");
        $("#footerTag").load("../../footer.html");
    });
    ChangeEpisode(0);
    document.getElementById("VideoPlayer").addEventListener('ended', episodeEnded,false);
}

