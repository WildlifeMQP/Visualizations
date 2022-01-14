const express = require( 'express' ),
    bodyParser = require('body-parser'),
      app = express()

app.get('/', (req, res) => {
    res.redirect( 'main.html' )
})

app.use( express.static('public') )

app.post( '/btnClickServer', bodyParser.json(), (req,res) => {
    // assumes only one object to insert
    entry = req.body
    return res.json("hello!")
})

app.listen(process.env.PORT || 3000);