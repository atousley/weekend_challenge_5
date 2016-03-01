var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//break these out into connection module and fave route

var connectionString = '';
if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/weekend_5_challenge';
}

app.get('/data', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM favorites');

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

app.post('/data', function(req, res) {
    var addFavorite = {
        animal: req.body.animal,
        breed: req.body.breed,
        photo: req.body.photo,
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        description: req.body.description,
        city: req.body.city,
        state: req.body.state
    };

    pg.connect(connectionString, function (err, client, done) {
        client.query("INSERT INTO favorites " +
            "(animal, breed, photo, name, age, sex, description, contact_city, contact_state) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id",
            [addFavorite.animal, addFavorite.breed, addFavorite.photo, addFavorite.name, addFavorite.age, addFavorite.sex,
                addFavorite.description, addFavorite.city, addFavorite.state],
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