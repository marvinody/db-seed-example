const express = require('express')
const app = express()
const db = require('./db')

const port = process.env.PORT || 3000


app.get(`/api/people`, (req, res, next) => {
  db.models.Person.findAll()
    .then(items => res.send(items))
    .catch(next)
})

app.listen(port, () => console.log(`listening on port ${port}`))
