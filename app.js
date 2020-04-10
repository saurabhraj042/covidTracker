const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')


const app = express()

// Setting up Views

app.use(expressLayouts)
app.set('view engine','ejs')


//Public Folder Setup
app.use(express.static(path.join(__dirname,'public')))

app.use('/',require('./routes/index'))


app.listen(process.env.PORT || 8080,console.log("Server Started"))