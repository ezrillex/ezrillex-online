function PostComment (){
    $.ajax({
        url: '/pages/post_comment.php',
        type: 'post',
        data: $('#comment_form').serialize(),
        success: function(data){

            if(data === "success"){ location.reload(); }
        }
    });
}