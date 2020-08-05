function Startup(){
    $(function(){
        $("<div>").load("sitewide.html").unwrap().appendTo("#headTag");
        $("#navigation").load("navbar.html");
        $("#footerTag").load("https://ezrillex.online/footer.html");
    });
}