
const titleContainer = document.getElementById("title");
const inputElements = document.querySelectorAll("input");
const displayElement = document.querySelector(".display-container");

// titleContainer.addEventListener("input", (event) => {
//     const valueContainer = event.target.value;
//     console.log(valueContainer);
// });

inputElements.forEach((input) => {
    input.addEventListener("input", (e) => {
        console.log(e.target.value);
        const headingElement = displayElement.querySelector("heading");
        
    })
})

function createDisplayElements() {
    const headingContainer = document.createElement("h1");
    headingContainer.classList.add("heading");
    displayElement.appendChild(headingContainer);

    const paragraphContainer = document.createElement("p");
    paragraphContainer.classList.add("description");
    displayElement.appendChild(paragraphContainer);

    const authorNameContainer = document.createElement("span");
    authorNameContainer.classList.add("author-name");
    displayElement.appendChild(authorNameContainer);
}