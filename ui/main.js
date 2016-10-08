var button=document.getElementById("submit_comment");
button.onclick = function(){

    var comment = document.getElementById("comment");
    var data = comment.value;
    var user = document.getElementById("user_id");
    var name = user.value;
    if(data !== null && name !== null ){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                var comments=request.responseText;
                comments=JSON.parse(comments);
                var list='';
                for(var i=0;i<comments.length;i=i+2){
                    list =list + '<li>'+comments[i+1]+ ' : ' +comments[i]+ '</li>';
                }
                var ul=document.getElementById("comment_list");
                ul.innerHTML=list;
            }
            
        }
        };
        
        request.open('GET','http://tamannagb.imad.hasura-app.io/submit-comment?comment='+data+'&user_id='+name,true);
        request.send(null);
    }
};
