let addToDoButton = document.getElementById("add-todo");
let toDoContainer = document.getElementById("todos-container");
let inputField = document.getElementById("text-input");

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = ""; /* Quiero que se blanquee el campo input */
    paragraph.addEventListener('click', function(){
        if (paragraph.classList.contains("item-selected")){
            toDoContainer.removeChild(paragraph);
        }else{
            paragraph.classList.add("item-selected");
        };
    });
});