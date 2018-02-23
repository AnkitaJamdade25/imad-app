var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*
var articles = {
    'article-one': {
    title : 'Article One | Ankita',
    content : `
        <p>This is a line.This is a line.This is a line</p>
        
        <p>This is a line.This is a line.This is a line</p>
        
        <p>This is a line.This is a line.This is a line</p>
`},
    'article-two': {
    title : 'Article Two | Ankita',
    content : `
        <p>This is a line.This is a line.This is a line</p>
        
        <p>This is a line.This is a line.This is a line</p>
        
        <p>This is a line.This is a line.This is a line</p>
`
}
};

function createTemplate (data){
    
var title = data.title;
var content = data.content;
    
var htmlTemplate = `

<html>
<head>
    <title>
         ${title}
    </title>

<meta name="viewport" content="width=device-width , initial-scale=1" /> 
<link href="/ui/style.css" rel="stylesheet" />

</head>
<body>
    
    <div class="container">
        
        ${content}
        
    </div>
    
</body>
</html>

`;

return htmlTemplate;
}
*/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    
  counter = counter + 1;
  res.send(counter.toString());
  
});


/*
app.get('/:articleName', function (req, res) {
  var article = req.params.articleName;
  //console.log(articleName);
  res.send(createTemplate(articles[article]));
});
*/


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
