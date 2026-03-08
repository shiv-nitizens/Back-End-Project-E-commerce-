const express = require('express');
const getConnection = require('./db');
const app = express();
const Port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello bitch");
})

app.post("/login",async (req,res)=>{
    const  {email , password} = req.body;

    let conn;
    try{
        conn = await getConnection();
        const row = await conn.query(
            "SELECT * FROM users WHERE email= ?",[email]
        );
        if(row[0].password === password){
            res.status(200).json(row);
        }else{
            res.status(401).json("enter correct cedentials");
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Database error"});
    }finally{
        if(conn){
            await conn.end();
        }
    }
})

app.post("/signup",async (req,res)=>{
    const {email , password} = req.body;

    let conn;
    try{
        conn = await getConnection();
        const row = await conn.query(
            "SELECT * FROM users WHERE email = ?",[email]
        );
        if (row.length){
            res.status(409).json("User already exist...");
        }else{
            const new_row = await conn.query("INSERT INTO users (email,password) VALUES ( ? , ?)",[email,password]);
            if(new_row[0].affectedRows === 1){
                res.status(201).json("user signed in...");
            }else{
                res.status(400).json("Error occured");
            }
        }
    }catch(err){
        res.status(500).json(err);
    }
    finally{
        if(conn){
            await conn.end();
        }
    }
})

app.listen(Port,()=>{
    console.log("Server is running");
})



