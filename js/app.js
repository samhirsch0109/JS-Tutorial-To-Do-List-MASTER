const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");

const list = document.getElementById("list");
function addToDo (toDo) {
const text = `<li class="item">
<i class="fa fa-circle-thin" job="complete"></i>
<p class="text"> ${toDo} </p>
<i class="fa fa-trash-o" job="delete"> </i>
</li>`

const position = "beforeend";
list.insertAdjacentHTML(position, text);
}
const element = document.getElementById("element")

const input = document.getElementById("input");

document.addEventListener("keyup",function(event){
    if( event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo)
        }
        input.value = "";
    }
});

let LIST = []
let id = 0;

LIST[0] ->
{
    name : "Drink Coffe",
    id : 0,
    done : false,
    trash : false
}
LIST[1] ->