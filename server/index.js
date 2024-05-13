import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app  = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({host: "localhost", user: "root", password: "", database: "expenses"})

app.listen(3030, ()=> {console.log("Running")})