function lc(code){
    switch(code){
        case 0:
            activate("#navinicio");
            break;
        case 1:
            activate("#navchangelog");
            break;
        case 2:
            activate("#navcontacto");
            break;
        case 3:
            activate("#navseries");
            break;
        case 4:
            activate("#navretro");
            break;
    }
}

function activate(id){
    $(".nav-item").find(".active").removeClass("active");
    $(id).addClass("active");
}

$.ajaxSetup ({
    // Disable caching of AJAX responses STALE DATA IS BAD FOR DEVELOPMENT KEKW
    cache: false
});