const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const table_model = require('./postrgres')

const app = express()

const port = 3001


app.use(cors());

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/some_table', table_model.getSomeTable)
app.post('/some_table', table_model.createSomeTable)
app.delete(`/some_table/:id`, table_model.deleteSomeTable)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})