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
                    list = '<li>'+comments
                }
                
            }
            
        }
    }
}
