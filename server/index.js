const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000

// middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser());
app.use(express.static(__dirname + '/views'));

// routes
app.use("/", require("./routes"));

// handle ploduction
if (process.env.NODE_ENV === 'production'){
    console.log('developer mode')

    // static files
    app.use(express.static(__dirname + '/public/'))

    // handle spa
    app.use('/.*/', (req, res) => app.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, () => console.log(`Server start on port ${ port }`))