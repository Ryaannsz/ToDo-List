const sequelize = require('sequelize')


const connection = new sequelize("todo_list", "root", "1234", {
        host: 'localhost',
        dialect: 'mysql'
})

if(connection.authenticate()){
    console.log("Banco de dados concetado com sucesso!")
}else{
    console.log("Falha na conexão!")
}




module.exports = connection