
let btnTodo = document.getElementById("btn_todo")
let inputTodo = document.getElementById("input")
let containerTodo = document.getElementById("todo_list")
var i = document.getElementsByClassName('bEdit').length+1
const url = "http://localhost:7070/dataTodo"

async function connDados(url, dados){
  fetch(url+"/"+"post",{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({list: dados.list})
  })
  .then(response =>{
    if(response.ok){
      response.json()
    }else{
      throw new Error("Network response was not ok")
    }
  })
  .then(response => {
    console.log(response)
    response.json()
    })
  .catch(error =>{
    console.log(error)
  })
}


btnTodo.addEventListener('click', function(){
 
  if(inputTodo.value==""){
    prompt("Impossível proceder")
  }else{
    let obj = {
      list: inputTodo.value
    }
    connDados(url, obj)

    fetch(url+"/"+"ids")
    .then(response => response.json())
    .then(data =>{
    createData(data.length+1)
  })


  }
})

function showList(data){
 
  data.forEach(element => {
   var p = document.createElement('p')
   var btn = document.createElement('button')
    var remove = document.createElement('button')
     
      //Atribuir Classe
      p.setAttribute('class','pEdit')
      btn.setAttribute('class','bEdit')
      remove.setAttribute('class','bRemove')

      //Atribuir ID

      btn.setAttribute('id',element.id);
      p.setAttribute('id',element.id);
      remove.setAttribute('id',element.id);
     
   // Atribuir Função
      btn.setAttribute('onclick','edit('+element.id+')')
      remove.setAttribute('onclick','remove('+element.id+')');
  
      p.innerText = i+" - "+element.list+"."
      btn.innerText = "Editar"
      remove.innerText = "Remover"
         
    
    
    containerTodo.appendChild(p)
    containerTodo.appendChild(btn)
    containerTodo.appendChild(remove)
    i++
  });
}
    

    fetch(url)
    .then(response => response.json())
    .then(data => showList(data))
  
  
 



  
  


function createData(i){
   
        
         var p = document.createElement('p')
         var btn = document.createElement('button')
          var remove = document.createElement('button')
           
            //Atribuir Classe
            p.setAttribute('class','pEdit')
            btn.setAttribute('class','bEdit')
            remove.setAttribute('class','bRemove')

            //Atribuir ID

            btn.setAttribute('id',i);
            p.setAttribute('id',i);
            remove.setAttribute('id',i);
           
         // Atribuir Função
            btn.setAttribute('onclick','edit('+i+')')
            remove.setAttribute('onclick','remove('+i+')');
        
            p.innerText = i+" - "+inputTodo.value+"."
            btn.innerText = "Editar"
            remove.innerText = "Remover"
               
          
          containerTodo.appendChild(p)
          containerTodo.appendChild(btn)
          containerTodo.appendChild(remove)
        
        }

  


function edit(i){
    
  let newText = prompt("Digite o novo código: ")
  let obj= {
    "id": i,
    "list": newText
  }
   document.getElementById(i).innerText = i+" - "+newText+"."

   fetch(url+"/"+"put"+"/"+i,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
   })
    .then(response =>{
      console.log(response)
      response.json()
    })
    .catch(error =>{
      console.log(error)
    })
}

function remove(i){
    console.log(i)
    fetch(url+'/'+'del'+'/'+i,{
      method: 'DELETE',
    })
    .then(response => console.log("Removido com sucesso!"))

   for(e=0;e<3;e++){
    document.getElementById(i).remove()
   }
 
  }







   

