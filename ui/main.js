var submit=document.getElementById("submit_comment");
submit.onclick = function(){
    var request = new XMLhttpRequest();
    request.onreadyatchange = function(){
        if(request.readyState == XMLhttpRequest.DONE){
            if(request.status == 200){
                var commecnts=request.responseText;
                comments=JSON.parse(comments);
                var list='';
                for(var i=0;i<comments.length;i++){
                    list = '<li>'+comments[i]+'</li>';
                }
                var ul=document.getElementById("comment_list");
                ul.innerHtml=list;
            }
            
        }
    };
    var comment = document.getElementById("comment");
    var data = comment.value;
    request.open('GET','http://Tamannagb.imad.hasura-app.io/submit-comment?comment='+data,true);
    request.send(null);
};
