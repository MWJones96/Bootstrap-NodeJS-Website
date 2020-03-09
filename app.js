var express = require('express');
var exphbs  = require('express-handlebars');
var quote = require('prog-quote')();

var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	q = quote.next().value;
	matt_age = ((new Date() - new Date(1996, 7, 8)) / (60 * 60 * 24 * 365 * 1000)).toFixed(2);

    res.render('home', {quote: q.quote, author: q.author, matt_age_int: Math.floor(matt_age), matt_age: matt_age});
});

app.get('/projects', function(req, res) {
    res.render('projects')
});

app.get('/contact', function(req, res) {
    res.render('contact')
});

app.listen(3000);