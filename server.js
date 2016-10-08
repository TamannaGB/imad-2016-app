var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
'article-one':{
    title:'Tamanna Gupta | Aticle-one',
    heading:'Article One',
    date:'30 September 2016',
    content:`<p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>
            
            <p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>
            
            <p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>`
},
'article-two' : {
    title:'Tamanna Gupta | Aticle-two',
    heading:'Article Two',
    date:' 6 October 2016',
    content:`<p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>
            
            <p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>
            
            <p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>`
},
'article-three' : {
    title:'Tamanna Gupta | Aticle-three',
    heading:'Article Three',
    date:'15 October 2016',
    content:`<p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>
            
            <p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>
            
            <p>
                content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.content of article-one.
                
            </p>`
}
};


function createTemplate(data){
var htmlTemplate=`<!doctype html>
<html>
    <head>
        <title>
            ${data.title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name='viewport' content='width_device-width , initial-scale=1'/>
    </head>
    <body>
    
    <div class="container">    
        <a href='/'>Home</a>
        
        <hr>
        
        <h3>
            ${data.heading}
        </h3>
        <div>
            ${data.date}
        </div>
        <div>
            
            ${data.content}
        </div>
        <hr>
        <h3> Comments </h3>
        <br>
        <div>
        <ul id="comment_list">
        
        </ul>
        </div>
        <hr>
        <h3> Add a Comment </h3>
        <div> 
        <input type="text" placeholder="Add a Comment" id="comment"/><br>
        <br>
        <input type="text" placeholder="User Id" id="user_id"/><br>
        <br>
        <input type="submit" value="Submit" id="submit_comment"/>
        </div>
    </div>
    <script type="text/javascript" src="/ui/main.js">
    alert("executing js");
    </script>
    </body>
</html>`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var comments=[];
app.get('/submit-comment/:comment',function(req,res){
   var comment=req.query.comment;
   comments.push(comment);
   res.send(JSON.stringify(comments));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/pic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic.jpg'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
