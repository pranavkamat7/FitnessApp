const express = require("express");
const app = express();
const cors =require("cors");
const pool = require("./db");

//middleware

app.use(cors());
app.use(express.json());


//routes

//create users
app.post("/names",async(req,res)=>{

try {
   console.log(req.body);
   const { description } = req.body;
   const newName = await pool.query("INSERT INTO name (description) VALUES($1) RETURNING *",[description]);
   res.json(newName.rows[0]);


    
} catch (err) {
    console.error(err.message)
    
}

})
//get name
app.get("/names/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const name = await pool.query("SELECT * FROM name WHERE user_id = $1",[id]);
        res.json(name.rows[0]);
        
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000,()=>{console.log('Server has started on port 5000')})