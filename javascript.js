let btnTodo = document.getElementById("btn_todo")
let inputTodo = document.getElementById("input")
let containerTodo = document.getElementById("todo_list")


var i=1;

btnTodo.addEventListener('click', function(){
    var p = document.createElement('p')
    var btn = document.createElement('button')

        if(inputTodo.value==""){
                alert("Impossível realizar o procedimento!")
        }else{
        
            btn.setAttribute('id',i);
            p.setAttribute('id',i);
            btn.setAttribute('class','bEdit')
            btn.setAttribute('onclick','pass('+i+')')
            p.setAttribute('class','pEdit')

        p.innerText = i+" - "+inputTodo.value+"."
        btn.innerText = "Editar"
        containerTodo.appendChild(p);
        containerTodo.appendChild(btn)
        i++;
        }



})


function pass(i){

   document.getElementById(i).innerText = i+" - "+prompt("Digite o novo código: ")+"."
    
}





   





