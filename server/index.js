import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app  = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({host: "localhost", user: "root", password: "", database: "expenses"})

app.get('/',(req,res) => {
    const sql = "SELECT * FROM expense";
    db.query(sql, (err, data) => {
        if(err){
            return res.json({Error: "Error"})
        }
        return res.json(data)
    })
})

app.post('/create',(req,res) => {
    const sql = "INSERT INTO expense (name,cost,date,recurring) VALUES (?)";
    const values = [
        req.body.name,
        req.body.cost,
        req.body.date,
        req.body.recurring
    ]
    db.query(sql,[values], (err, data) => {
        if(err){
            return res.json({Error: "Error"})
        }
        return res.json(data)
    })
})

app.put('/update/:id',(req,res) => {
    const sql = "UPDATE expense set name = ?, cost = ?, date = ?, recurring = ? where id = ?";
    const values = [
        req.body.name,
        req.body.cost,
        req.body.date,
        req.body.recurring
    ]
    const id = req.params.id;
    db.query(sql, [...values, id],(err, data) => {
        if(err){
            return res.json({Error: "Error"})
        }
        return res.json(data)
    })
})

app.delete('/delete/:id',(req,res) => {
    const sql = "delete from expense where id = ?";
    const id = req.params.id;
    db.query(sql, [id],(err, data) => {
        if(err){
            return res.json({Error: "Error"})
        }
        return res.json(data)
    })
})

app.listen(3030, ()=> {console.log("Running")})