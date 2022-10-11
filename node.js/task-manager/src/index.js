const express = require('express');
var bodyParser = require('body-parser')

const app = express();
var jsonParser = bodyParser.json()
const port = process.env.PORT || 3000

app.post('/users',jsonParser, (req, res) => {
    console.log(req.body);
    res.send('testing!')
})
app.listen(port, () => {
    console.log('server is op on port' + port );
})