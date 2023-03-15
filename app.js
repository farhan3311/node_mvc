const express = require('express')
const app = express()
const cors = require('cors')

const quotes = require("./quotes")

app.use(cors())



app.use('/quotes/random', (req, res, next) => {

    try {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        res.status(200).send({"data": randomQuote, "msg": "success"})

    }
    catch (e) {
        res.status(500).send({"data": e, "msg": "failed"})
    }   
    next()
})

app.use('/quotes/:id', (req, res, next) => {

    const id = parseInt(req.params.id)
    try {
        const quote = quotes.filter(q => q.id === id)
        if (quote.length > 0){
            res.status(200).send({"data": quote, "msg": "success"})

        }
        else {
            res.status(404).send({"msg": "failed"})

        }
    }
    catch (e) {
        res.status(500).send({"data": e, "msg": "failed"})

    }
    next()
})
app.use('/quotes', (req, res, next) => {

    try {
        res.status(200).send({"data": quotes, "msg": "success"})

    }
    catch (e) {
        res.status(500).send({"data": e, "msg": "failed"})
    }   
    next()
})

module.exports = app