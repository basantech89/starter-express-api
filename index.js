const express = require('express')
const cors = require('cors')
const helmet = require("helmet")

const app = express()
app.use(cors())

// helmet.contentSecurityPolicy({
//   useDefaults: true,
//   directives: {
//     "font-src": ["'self'", "external-website.com"],
//     // allowing styles from any website
//     "style-src": null,
//   },
// })

helmet.hsts({
    // 60 days
    maxAge: 86400,
    // removing the "includeSubDomains" option
    includeSubDomains: false,
})

app.use(helmet())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)