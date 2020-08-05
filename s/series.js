function Startup(){
    // load site wide tags and the navbar
    $(function(){
        $("<div>").load("../sitewide.html").unwrap().appendTo("#headTag");
        $("#navigation").load("../navbar.html");
        $("#footerTag").load("../footer.html");
    });
}
