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
var htmlTemplate=`<html>
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
        <h4> Comments </h4>
        <br>
        <div>
        
        </div>
        <hr>
        <h4> Add a Comment </h4>
        <div> 
        <input type="text" name="Add a Comment"/><br>
        <input type="text" name="User Id"/><br>
        <input type="submit" value="Submit"/>
        </div>
    </div>    
    </body>
</html>`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
