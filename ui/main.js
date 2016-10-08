var button=document.getElementById("submit_comment");
button.onclick = function(){

    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                var comments=request.responseText;
                comments=JSON.parse(comments);
                var list='';
                for(var i=0;i<comments.length;i++){
                    list =list + '<li>'+comments[i]+'</li>';
                }
                var ul=document.getElementById("comment_list");
                ul.innerHTML=list;
            }
            
        }
    };
    var comment = document.getElementById("comment");
    var data = comment.value;
    request.open('GET','http://tamannagb.imad.hasura-app.io/submit-comment?comment='+data,true);
    request.send(null);
};
