const express = require('express');
const mysql = require('mysql2');
const port = 5000;
const app = express();

app.use(express.json());

var connection = mysql.createConnection({
    host: 'localhost',
    port: 5001,
    user: 'Acejut',
    password: 'RedPenguin27!',
    database: 'users'
})

app.listen(port, () => {
    console.log('Listening at port ' + port);
})

app.get("/test", (req, res) => {
    res.send("Testing");
});

app.get("/shopList", (req, res) => {
    connection.query(
        "SELECT * FROM ingredients", function(err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    )
})

app.post('/iUpdate', (req, res) => {
    var ingrIDArray = req.body.ingrIDArray;
    var calculatedAmts = req.body.calculatedAmts;

    connection.query(
        "UPDATE ingredients SET amount = amount + (CASE id WHEN ? THEN ? WHEN ? THEN ? WHEN ? THEN ? WHEN ? THEN ? END) WHERE id in (?, ?, ?, ?)",
        [ingrIDArray[0], calculatedAmts[0], ingrIDArray[1], calculatedAmts[1], ingrIDArray[2], calculatedAmts[2], ingrIDArray[3], calculatedAmts[3], ingrIDArray[0], ingrIDArray[1], ingrIDArray[2], ingrIDArray[3]],
        function (err, result) {
            if (err) {
                console.log(err);
                res.send({'success': false, 'message': 'Could not connect to DB'});
            }
            else if (result.affectedRows > 0) {
                res.send({'success': true, 'message': 'Ingredient update success.'});
            }
            else {
                res.send({'success': false, 'message': 'Not updated'});
            }
        }
    )
})

app.post('/users', (req, res) => {
    var username = req.body.Username;
    var password = req.body.Password;

    connection.query(
        "SELECT * FROM user WHERE username = ? AND password = ?",
        [username, password], function (err, row, field) {
            if (err) {
                console.log(err);
                res.send({'success': false, 'message': 'Could not connect to DB'});
            }

            else if (row.length > 0) {
                res.send({'success': true, 'user': row[0].username});
            }

            else {
                res.send({'success': false, 'message': 'User not found'});
            }
        }
    )
});

