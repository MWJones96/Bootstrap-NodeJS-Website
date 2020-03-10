var express = require('express');
var exphbs  = require('express-handlebars');
var xkcd = require('xkcd');

var currXKCD = null;

var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    xkcd(function (data) {
        currXKCD = data;
    });
	matt_age = ((new Date() - new Date(1996, 7, 8)) / (60 * 60 * 24 * 365 * 1000)).toFixed(2);

    res.render('home', {matt_age_int: Math.floor(matt_age), matt_age: matt_age, xkcd: currXKCD});
});

app.get('/projects', function(req, res) {
    res.render('projects')
});

app.get('/contact', function(req, res) {
    res.render('contact')
});

app.listen(3000);