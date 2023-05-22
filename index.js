var cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const server = express();
const port = 6969;

server.use(express.json());
server.use(cookieParser());

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

server.get('/login', function(req, res) {
    var opts = {
        maxAge: 2628288,
        secret: 'butts'
    }
    res.cookie("name", "Elijah", opts);
    res.status(200).send('Cookie successfully made!')
})

server.get('/hello', function(req, res) {
    if (req.cookies.name !== undefined) {
        res.send(`Welcome ${req.cookies.name}!`)
    } else {
        res.status(404).send("No cookie found")
    }
})