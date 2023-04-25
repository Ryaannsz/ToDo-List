const express = require('express')
const { engine } = require ('express-handlebars');
const app = express()

const dbConnection = require('./models/db')

const Data = require('./models/users')


app.use(express.json());


app.engine('handlebars', engine({defaultLayout: 'principal'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'));

app.get("/dataTodo/ids", async(req, res)=>{
    try{
        const conn = await dbConnection
        const sql = `SELECT id FROM users`
        const [rows, fields] = await conn.query(sql)
        res.json(rows)
    }catch(error){
        res.status(500).send("Server internal error")
    }

})

app.get("/dataTodo", async(req, res)=>{
    try{
        const conn = await dbConnection

        const sql = "SELECT * FROM users"
    
        const [rows, fields] = await conn.query(sql)
        res.json(rows)
    }catch(err){
            console.log(err);
            res.status(500).send("Erro ao verificar items")
    }
    
})

app.delete('/dataTodo/del/:id', async(req, res)=>{
try{
    const delTodo = async(req, res) =>{
        const conn = await dbConnection
        const sql = `DELETE FROM users WHERE id=${id}`
        return await conn.query(sql)
      }

    const { id } = req.params
    const result = await delTodo(id)
  
    res.json(result)
    
}catch(error){
    console.log(error)
    res.status(500).json({error: 'Internal Server Error'})
}




app.put('/dataTodo/put/:id', async(req, res) =>{
    try{
        const conn = await dbConnection
        const { list } = req.body
        const { id } = req.params
        const sql = `UPDATE users SET ${list} WHERE id=${id}`
        const result = conn.query(sql)
        res.json(result)
            //res.json(await Data.update({list: list}, {where: id}))
    }catch(error){
        console.log(error)
    }
})   
})

  
app.post("/dataTodo/post", async(req, res)=>{

    try{
        const { list } = req.body       
        res.json(await Data.create({list}))
    }catch(error){
        console.log(error)
        res.status(500).send("Internal server erro")
    }
})
//PAGINA INICIAL
app.get("/", function(req, res ) {
   res.render('inicio')
})
//SCRIPT DA PAGINA INICIAL
app.get("/public/javascript.js", function(req, res){
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/public/javascript.js');
})


app.get("/todo", async(req, res)=>{
    res.send("ToDo List") 
})

app.listen(7070, () =>{
    console.log("Servidor iniciado com sucesso!")
})