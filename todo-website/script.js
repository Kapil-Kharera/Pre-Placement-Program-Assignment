
const containerElement = document.querySelector("container");
const listElements = document.querySelector(".list-container");
const submitElement = document.getElementById("addBtn");
const editElement = document.querySelector(".edit-task-container");
const editInputElement = document.getElementById("task");
const updateBtnElement = document.getElementById("update-btn");
const closeBtnElement = document.getElementById("close-btn");





function createCard(value) {
    const taskContent = value;
    // console.log(inputElement);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const titleContainer = document.createElement("p");
    titleContainer.classList.add("todo-title");
    titleContainer.textContent = value;
    cardContainer.appendChild(titleContainer);

    const statusContainer = document.createElement("p");
    statusContainer.classList.add("todo-status");
    statusContainer.innerHTML = `Status: <span>Pending</span>`;
    cardContainer.appendChild(statusContainer);

    const buttonContainer1 = document.createElement("button");
    buttonContainer1.setAttribute("id", "btn-1");
    buttonContainer1.textContent = "Remove";
    cardContainer.appendChild(buttonContainer1);

    buttonContainer1.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })

    const buttonContainer2 = document.createElement("button");
    buttonContainer2.setAttribute("id", "btn-2");
    buttonContainer2.textContent = "Mark Completed";
    cardContainer.appendChild(buttonContainer2);

    buttonContainer2.addEventListener("click", () => {
        buttonContainer2.style.background = "#f3f354";


        const statusElement = cardContainer.querySelector(".todo-status span");
        statusElement.textContent = "Completed";
    })

    const buttonContainer3 = document.createElement("button");
    buttonContainer3.setAttribute("id", "btn-3");
    buttonContainer3.textContent = "Edit";
    cardContainer.appendChild(buttonContainer3);

    buttonContainer3.addEventListener("click", (e) => {
        editElement.style.display = "block";
        editInputElement.value = taskContent;   
    });

    closeBtnElement.addEventListener("click", () => {
        editElement.style.display = "none";
    });

    updateBtnElement.addEventListener("click", () => {
        titleContainer.textContent = editInputElement.value;
        editElement.style.display = "none";
    })

    listElements.appendChild(cardContainer);

}

function updateStatus() {


}

submitElement.addEventListener("click", (e) => {
    e.preventDefault();

    const inputElement = document.getElementById("todo-name");

    createCard(inputElement.value);

    inputElement.value = "";
});
