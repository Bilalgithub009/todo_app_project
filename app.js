var todo_input = document.getElementById("todo_input");
var add_todo_btn = document.getElementById("add_todo_btn");
var delete_all_todo_btn = document.getElementById("delete_all_todo_btn");
var todo_list = document.getElementById("todo_list");

add_todo_btn.addEventListener('click' , function(){
 if(!todo_input.value) return alert("put the value plzz")   
 var list_item =`<li><span>${todo_input.value}</span>
<button class = 'btn_color' onclick="edit(this)">edit</button> 
<button class = 'btn_color2' onclick="del(this)">del</button>
</li>`
todo_list.innerHTML += list_item;
todo_input.value = ''
});
function edit(element){
    console.log("edit===>" ,element.previousElementSibling.innerText)
    var previousValue = element.previousElementSibling.innerText
    var updatedValue = prompt("edit value" , previousValue) 
    element.previousElementSibling.innerText = updatedValue
    // var previousvalue = PreviousElementSibling.innerText
    // var updatedValue= prompt("enter edit value" ,previousvalue);
    // element. PreviousElementSibling.innerText = updatedValue
    
};


function del(element){
element.parentElement.remove()
}
