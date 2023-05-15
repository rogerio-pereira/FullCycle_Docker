const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) VALUES('Rogerio')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Node - Full Cycle</h1>')
})

app.listen(port, () => {
    console.log('rodando na porta '+port)
})