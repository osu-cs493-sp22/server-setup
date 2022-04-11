const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

app.use(function (req, res, next) {
    console.log("== Request received")
    console.log("  - METHOD:", req.method)
    console.log("  - URL:", req.url)
    console.log("  - HEADERS:", req.headers)
    next()
})

app.get('/', function (req, res, next) {
    res.status(200).send({
        msg: "Hello, world!!!!!!"
    })
})

app.get('/lodgings', function (req, res, next) {
    res.status(200).send({
        lodgings: [
            {
                id: '12345',
                name: 'My awesome condo',
                description: 'A great place to stay'
            },
            {
                id: '12345',
                name: 'My awesome condo',
                description: 'A great place to stay'
            },
            {
                id: '12345',
                name: 'My awesome condo',
                description: 'A great place to stay'
            }
        ]
    })
})

app.post('/lodgings', function (req, res, next) {
    console.log("  - req.body:", req.body)
    if (req.body && req.body.name && req.body.description) {
        /* Store data in database */
        res.status(201).send({
            id: '56789'
        })
    } else {
        res.status(400).send({
            err: "Request needs a JSON body with `name` and `description`."
        })
    }
})

app.get('/lodgings/:id', function (req, res, next) {
    console.log("  - req.params:", req.params)
    const id = req.params.id
    if (id === '12345') {
        res.status(200).send({
            id: '12345',
            name: 'My awesome condo',
            description: 'A great place to stay'
        })
    } else {
        next()
    }
})

// app.post()
// app.put()
// app.delete()
// app.patch()

app.use('*', function (req, res, next) {
    res.status(404).send({
        err: "This URL was not recognized: " + req.originalUrl
    })
})

app.use(function (err, req, res, next) {
    console.log("  - err:", err)
    res.status(500).send()
})

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
})
