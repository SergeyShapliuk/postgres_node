const pool = require("./db")

const getSomeTable = (request, response) => {
    pool.query('SELECT * FROM public.some_table ORDER BY id ASC', (error, results) => {
        if (error) {
            console.log("error",error)
        }
        console.log("yes")
      response.status(201).send(results.rows)
    })
}
const createSomeTable = (request, response) => {
    const {date, name, quantity, distance} = request.body
    pool.query('INSERT INTO public.some_table (date,name,quantity,distance) VALUES ($1, $2, $3, $4) RETURNING *', [date, name, quantity, distance], (error, results) => {
        if (error) {
            console.log("error",error)
        }
        response.status(201).send(results.rows)
    })
}
const deleteSomeTable = (request, response) => {
    const id = parseInt(request.params.id)
    console.log("id",id)
    pool.query('DELETE FROM public.some_table WHERE id = $1', [id], (error, results) => {
        if (error) {
            console.log("error",error)
        }
        response.status(201).send(JSON.stringify(id))
    })
}
const udateSomeTable = (request, response) => {
    const {name,quantity,distance}=request.body
    const id = parseInt(request.params.id)
    console.log("udateSomeTable",id,name,quantity,distance)
    pool.query('UPDATE public.some_table SET (name,quantity,distance)=(SELECT name,quantity,distance WHERE id = $1)', [id,name,quantity,distance], (error, results) => {
        if (error) {
            console.log("error",error)
        }
        response.status(201).send(results.rows)
    })
}
module.exports = {
    getSomeTable,
    createSomeTable,
    deleteSomeTable
}
