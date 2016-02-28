var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var connectionString = '';
if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/weekend_5_challenge';
}

//app.get('/data', function(req, res) {
//    res.send({message: 'hello'});
//});

app.post('/data', function(req, res) {
    //res.send(req.params.number);
    var addFavorite = {
        favorite: req.body.name
    };

    pg.connect(connectionString, function (err, client, done) {
        client.query("INSERT INTO favorites (name) VALUES ($1)",
            [addFavorite.favorite],
            function (err, result) {
                done();

                if (err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
    });
});

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});