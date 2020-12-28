
function activate(id){
    $(".nav-item").find(".active").removeClass("active");
    $(id).addClass("active");
}

$.ajaxSetup ({
    // Disable caching of AJAX responses STALE DATA IS BAD FOR DEVELOPMENT KEKW
    cache: false
});