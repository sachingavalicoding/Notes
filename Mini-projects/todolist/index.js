const add = document.querySelector("#add");
const todoParent = document.querySelector(".todos__container");
const input = document.querySelector("#input");

add.addEventListener("click", () => {
    const inputData = input.value.trim();
    if (inputData) {
        const todo = document.createElement("li");
        todo.classList.add("todo");

        // Add the text
        const text = document.createElement("span");
        text.textContent = inputData;

        // Add the delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="ri-delete-bin-line"></i>';
        deleteBtn.addEventListener("click", () => {
            todoParent.removeChild(todo);
        });

        // Append to the todo
        todo.appendChild(text);
        todo.appendChild(deleteBtn);
        todoParent.appendChild(todo);

        // Clear input
        input.value = "";
    } else {
        alert("Please enter a to-do item!");
    }
});
