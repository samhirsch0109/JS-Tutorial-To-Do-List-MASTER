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
const input = document.getElementById("input")

const element = document.getElementById("element")

