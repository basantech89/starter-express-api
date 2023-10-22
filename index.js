const express = require('express')
const app = express()

const helmet = require("helmet")

app.use(helmet())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)