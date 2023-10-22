const express = require('express')
const cors = require('cors')
const helmet = require("helmet")

const app = express()
app.use(cors())
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'"],
            imgSrc: ["'self'"],
            "style-src": ["'self'"],
        },
    },
}))

// helmet.contentSecurityPolicy({
// //   useDefaults: true,
//   directives: {
//     "font-src": ["'self'"],
//     // allowing styles from any website
//     "style-src": ["'self'"],
//   },
// })

// helmet.hsts({
//     // 60 days
//     maxAge: 86400,
//     // removing the "includeSubDomains" option
//     includeSubDomains: false,
// })

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.json('Yo!')
})
app.listen(process.env.PORT || 8080)