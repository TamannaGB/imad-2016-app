var button=document.getElementById("submit_comment");
button.onclick = function(){
    alert("submit button is clicked");
    var request = new XMLHttpRequest();
    
    var comment = document.getElementById("comment");
    var data = comment.value;
    request.open('GET','http://tamannagb.imad.hasura-app.io/submit-comment/hi',true);
    request.send(null);
};
