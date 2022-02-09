const express = require( 'express' ),
    bodyParser = require('body-parser'),
      app = express()

app.get('/', (req, res) => {
    res.redirect( 'index.html' )
})

app.use( express.static('public') )



app.listen(process.env.PORT || 3000);