const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "Random image generated everytime");
document.body.appendChild(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "Welcome to JavaScript Language";
newSection.appendChild(newP);
document.body.appendChild(newSection);

const newSection2 = document.createElement("section");
newSection2.innerHTML = "<h2>CSE 121b</h2><p>Welcome to JavaScript Language</p>";
document.body.appendChild(newSection2);