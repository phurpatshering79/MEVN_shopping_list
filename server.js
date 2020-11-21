const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')

const app = express()

//Using the body parser middleware to integrate the packet of data that we receive from a response
app.use(bodyParser.json())

//configuring the database
const db = require('./config/keys').mongoURI

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB coneected.....'))
  .catch((err) => console.log('Error is', err))

//using the router modules that is created in a sepereate file
//Reaching the endpoint /item would invoke the below middlwhere.
app.use('/api/items', items)

//Setting the port number, if not present in the environment variable, set by default
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started on ${port}`))
