var descriptores = ["Episode 0 v2",
    "Episode 1 v2",
    "Episode 2 v2",
    "Episode 3 v2",
    "Episode 4",
    "Episode 5 v2",
    "Episode 6",
    "Episode 7 v2",
    "Episode 8 v2",
    "Episode 9 v2",
    "Episode 10 v2",
    "Episode 11 v2",
    "Episode 12",
    "Episode 13 v2",
    "Episode 14",
    "Episode 15",
    "Episode 16 v2",
    "Episode 17",
    "Episode 18",
    "Episode 19",
    "Episode 20 v2",
]

var titulos = ["Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
    "Fate/Stay Night",
]

var eps = ["https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222662&authkey=ACTJ9yO1MTQrF8E",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222654&authkey=AEAcnOlGbjBKW7A",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222647&authkey=AAb_SAFFU3GgkvY",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222643&authkey=AC2Kg8_jxD2BfnU",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222642&authkey=APnIahy8IuOGcf0",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222645&authkey=AGWrubTeutFJZWs",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222646&authkey=AAgBftYllIe4Gbg",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222649&authkey=AGroaHOPKrMvqKc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222648&authkey=AEzNfQj0M57Pf0I",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222644&authkey=AOxORY8Xe7pgPVA",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222661&authkey=AJWRK7VkqfsNQqc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222660&authkey=AA3v_iw9R2hih4U",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222658&authkey=AJtRXvUIQ6xoYhQ",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222659&authkey=ACsjzCQtmAPk7rQ",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222657&authkey=AOycQnoRCAJJuQg",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222655&authkey=AOneB_7LCiYa8rc",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222656&authkey=ADypt8QktlgBfaw",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222653&authkey=AHTHpHMDHpXrm4E",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222652&authkey=AIjVS3S1z-fitUE",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222651&authkey=AEghqwT8dNo71Zg",
    "https://onedrive.live.com/download?cid=A03A8966D3E08B51&resid=A03A8966D3E08B51%21222650&authkey=AM-SUsYj2QqBxC4",
]


let currentEp = 0;

var episodeParams = new UpdateEpisodeParams("fatestaynight", eps, titulos, descriptores, "VideoSource", "VideoPlayer", "bAnt", "bSig", "EpisodeNumber", "Titulo");

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
    });
    ChangeEpisode(0);
    document.getElementById("VideoPlayer").addEventListener('ended', episodeEnded,false);
}

