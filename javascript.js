let btnTodo = document.getElementById("btn_todo")
let inputTodo = document.getElementById("input")
let containerTodo = document.getElementById("todo_list")


var i=1;

btnTodo.addEventListener('click', function(){
    var p = document.createElement('p')
    var btn = document.createElement('button')
    var remove = document.createElement('button')
    
    //var tst = document.createElement('button')
    

    


   

        if(inputTodo.value==""){
                alert("Impossível realizar o procedimento!")
        }else{
        
           
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
        

         

          
          
          

          for(e=0;e<document.getElementsByClassName('pEdit').length;e++){
            
            
            p.innerText = e+1+" - "+inputTodo.value+"."
            btn.innerText = "Editar"
            remove.innerText = "Remover"
                
        
           }
          }
          
          containerTodo.appendChild(p);
          containerTodo.appendChild(btn)
          containerTodo.appendChild(remove)
          
        
        i++;
        })


function edit(i){

   document.getElementById(i).innerText = i+" - "+prompt("Digite o novo código: ")+"."
    
}

function remove(i){
    

   for(e=0;e<3;e++){
    document.getElementById(i).remove()

   }

   
   for(e=0;e<document.getElementsByClassName('pEdit').length;e++){
        
    document.getElementsByClassName('pEdit')[e].innerText = e+1+" - "+inputTodo.value+"."
    

    
        

   }
    
}







   





