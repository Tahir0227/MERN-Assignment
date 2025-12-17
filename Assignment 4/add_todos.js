const addBtn = document.getElementById("addBtn");
const input = document.getElementById("todos");
const list = document.getElementById("list");

addBtn.addEventListener("click", function() {
    const text = input.value;
    if(text === "") return;

    const li = document.createElement("li");
    li.innerHTML = `<span>${text}</span>
                    <button class="delete" onclick="deleteTodo(this)">Delete</button>`;


    list.appendChild(li);
    input.value = "";
});

function deleteTodo(button) {
    const li = button.parentElement;
    li.remove();
}
    
