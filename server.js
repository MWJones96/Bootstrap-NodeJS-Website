var express = require('express');
var fs = require('fs');
var exphbs  = require('express-handlebars');
var xkcd = require('xkcd');

var currXKCD = null;

var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Serve image folder
app.use(express.static(__dirname + '/img'));

app.get('/', function (req, res) {
    xkcd(function (data) {
        currXKCD = data;
        matt_age = ((new Date() - new Date(1996, 7, 8)) / (60 * 60 * 24 * 365 * 1000)).toFixed(2);

        res.render('home', {matt_age_int: Math.floor(matt_age), matt_age: matt_age, xkcd: currXKCD});
    });
});

app.get('/projects', function(req, res) {
    var projects = JSON.parse(fs.readFileSync('projects.json', 'utf8')).projects;

    projects.sort(function(p1, p2) {
        p1_year = "01/" + p1.year;
        p2_year = "01/" + p2.year;

        var d1 = new Date(p1_year);
        var d2 = new Date(p2_year);
        
        return d2 - d1;
    });

    res.render('projects', {projects: projects})
});

app.get('/contact', function(req, res) {
    res.render('contact')
});

app.listen(8080);
