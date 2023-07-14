
const inputElement = document.getElementById("username");
const submitElement = document.getElementById("submit");
const displayElement = document.getElementById("show-data");



const fetchData = async () => {
    const usernameValue = inputElement.value;
    const url = `https://api.github.com/users/${usernameValue}`;

    const response = await fetch(url);
    const data = await response.json();

    

    const imgContainer = document.getElementById("img-container");
    const nameContainer = document.getElementById("name");
    
    const portfolioContainer = document.getElementById("portfolio");

    const locationContainer = document.getElementById("location");
    const publicReposContainer = document.getElementById("public-repos");
    const followersContainer = document.getElementById("followers");
    const bioContainer = document.getElementById("bio");

    imgContainer.innerHTML = `<img src="${data.avatar_url}" alt="User Avatar" id="avatar-img">`;
    nameContainer.textContent = `Name: ${data.name}`;


    const anchorContainer = document.createElement("a");
    anchorContainer.href = data.html_url;
    anchorContainer.target = "_blank";
    anchorContainer.textContent = "Portfolio";
  
    portfolioContainer.innerHTML = `Portfolio: `;

    portfolioContainer.appendChild(anchorContainer);

    console.log(portfolioContainer);


    locationContainer.textContent = `Location: ${data.location}`;
    publicReposContainer.textContent = `Public Repositories: ${data.public_repos}`;
    followersContainer.textContent = `Followers: ${data.followers}`;
    bioContainer.textContent = `Bio: ${data.bio}`;
}

const updateData = () => {
    // displayElement.innerHTML = "";

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("id", "img-container");
    displayElement.appendChild(imgContainer);

    const userDataContainer = document.createElement("div");
    userDataContainer.setAttribute("id", "user-data");
    displayElement.appendChild(userDataContainer);

    const nameContainer = document.createElement("p");
    nameContainer.setAttribute("id", "name");
    userDataContainer.appendChild(nameContainer);

    const portfolioContainer = document.createElement("p");
    portfolioContainer.setAttribute("id", "portfolio");
    userDataContainer.appendChild(portfolioContainer);

    const locationContainer = document.createElement("p");
    locationContainer.setAttribute("id", "location");
    userDataContainer.appendChild(locationContainer);

    const publicReposContainer = document.createElement("p");
    publicReposContainer.setAttribute("id", "public-repos");
    userDataContainer.appendChild(publicReposContainer);

    const followersContainer = document.createElement("p");
    followersContainer.setAttribute("id", "followers");
    userDataContainer.appendChild(followersContainer);

    const bioContainer = document.createElement("p");
    bioContainer.setAttribute("id", "bio");
    userDataContainer.appendChild(bioContainer);
}

updateData();

submitElement.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData();
        // displayElement.innerHTML = "";
});




// const inputElement = document.getElementById("username");
// const submitElement = document.getElementById("submit");
// const displayElement = document.getElementById("show-data");

// const createContainerElement = (elementType, id) => {
//   const containerElement = document.createElement(elementType);
//   containerElement.setAttribute("id", id);
//   return containerElement;
// };

// const createTextElement = (elementType, id, text) => {
//   const textElement = document.createElement(elementType);
//   textElement.setAttribute("id", id);
//   textElement.textContent = text;
//   return textElement;
// };

// const fetchData = async () => {
//   const usernameValue = inputElement.value;
//   const url = `https://api.github.com/users/${usernameValue}`;

//   const response = await fetch(url);
//   const data = await response.json();

//   const imgContainer = createContainerElement("div", "img-container");
//   const nameContainer = createTextElement("p", "name", `Name: ${data.name}`);
//   const portfolioContainer = createContainerElement("p", "portfolio");
//   const locationContainer = createTextElement("p", "location", `Location: ${data.location}`);
//   const publicReposContainer = createTextElement("p", "public-repos", `Public Repositories: ${data.public_repos}`);
//   const followersContainer = createTextElement("p", "followers", `Followers: ${data.followers}`);
//   const bioContainer = createTextElement("p", "bio", `Bio: ${data.bio}`);

//   imgContainer.innerHTML = `<img src="${data.avatar_url}" alt="User Avatar" id="avatar-img">`;
  
//   const anchorContainer = createTextElement("a", "portfolio-link", "Portfolio");
//   anchorContainer.href = data.html_url;
//   anchorContainer.target = "_blank";
  
//   portfolioContainer.innerHTML = `Portfolio: `;
//   portfolioContainer.appendChild(anchorContainer);

//   displayElement.innerHTML = ""; // Clear previous data
//   displayElement.appendChild(imgContainer);
//   displayElement.appendChild(nameContainer);
//   console.log(nameContainer)
//   displayElement.appendChild(portfolioContainer);
//   displayElement.appendChild(locationContainer);
//   displayElement.appendChild(publicReposContainer);
//   displayElement.appendChild(followersContainer);
//   displayElement.appendChild(bioContainer);
// };

// submitElement.addEventListener("click", (e) => {
//   e.preventDefault();
//   fetchData();
// });

