const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");

const list = document.getElementById("list");
list.addEventListener("click", function(event) {
    let element = event.target; // <i class=de fa fa-trash-0" job="delete" id="0"></li>
    const elementJOB = event.target.attributes.job.value; //delete or complete
    if(elementJOB == "complete") {
        completeToDo(element);
    }else if(elementJOB == "delete"){
        removeToDo();
    }
    });


const CHECK = "fa-check-circle";
const UNCHECK ="fa-circle-thin";
const LINE_THROUGH = "lineThrough"
function addToDo (toDo ,id,done, trash) {

if(trash){ return; }
    const DONE = done ? Check : UNCHECK;
    const LINE = done ? LINE_THROUGH: "";


const text = `<li class="item">
<i class="fa ${Done} complete" job="complete" id="${id}"></i>
<p class="text" ${LINE}> ${toDo} </p>
<i class="fa fa-trash-o" job="delete" id=${id}"> </i>
</li>`

const position = "beforeend";
list.insertAdjacentHTML(position, text);
}

addToDo("Drink Coffee") 

const element = document.getElementById("element")

const input = document.getElementById("input");

document.addEventListener("keyup",function(event){
    if( event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo,id, false, false)
            LIST.push(
                {
                    name: toDo,
                    id: id,
                    done: false,
                    trash:false
                }
            )
        }
        input.value = "";
        id++;
    }
});

let LIST = [];
let id = 0;

LIST =[{} ,{} , ];
LIST[0] -->
{
    name: "Drink Coffee",
    id: 0,
    done: false,
    trash: false
}

LIST[1] -->
{
    name: "Workout",
    id: 1,
    done: true,
    trash: false
}

function removeToDo(element ){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash = true;
}