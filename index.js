const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const table_model = require('./postrgres')

const app = express()

const PORT = process.env.PORT || 3001

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
console.log("ta",table_model)
app.get('/some_table', table_model.getSomeTable)
app.post('/some_table', table_model.createSomeTable)
app.delete(`/some_table/:id`, table_model.deleteSomeTable)


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})
