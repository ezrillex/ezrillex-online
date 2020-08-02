var currentWebPage = "Home";


function tuturuPlay() {
    var tu = document.getElementById("tuturu");
    tu.play();
}

function HomeButtonClick() {
    SwitchWebPage("Home", "inicio.html");
}

function EpisodesButtonClick(){
    SwitchWebPage("Episodes", "episodios.html");
}

function SwitchWebPage(pagename, webpageFile){
    tuturuPlay(); // sound effect yeah, todo on episode change
    if(currentWebPage !== pagename){
        $("#content").load(webpageFile);
        currentWebPage = pagename;
    }
    // else check if contents are corrupted? or playback is stopped or something?
}