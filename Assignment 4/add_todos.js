function addTodo() {
    let input = document.getElementById("todos");
    let text = input.value.trim();

    if (text === "") {
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete" onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("list").appendChild(li);
    input.value = "";
}
