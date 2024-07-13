const tasksList = document.getElementById('tasks');


tasksList.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains("checkbox")) {
        const p = target.parentElement.querySelector(".taskItem");

        if (target.src.endsWith("unchecked.svg")) {
            target.src = "./images/checked.svg";
            p.classList.add("lined");
        } else {
            target.src = "./images/unchecked.svg";
            p.classList.remove("lined");
        }
    }

    if (target.classList.contains("cross")) {
        target.closest(".task").remove();
    }
})

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    addTask();
})

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask () {
    if (input.value == "") {
        alert("Please enter some text!");
    } else {
        tasksList.innerHTML += "<div class='task'><img class='checkbox' src='./images/unchecked.svg' /><p class='taskItem'>" + input.value + "</p><span class='cross'>X</span></div>";
        input.value = "";
    }
}