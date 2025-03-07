import "../section.js";

while ((btnProject.clicked = 3)) {
  btnProject.addEventListener("click", function (event) {
    event.preventDefault();

    const mainElement = document.querySelector(".main");
    const container = mainElement.appendChild(document.createElement("div"));
    container.classList.add("container");

    const box = container.appendChild(document.createElement("div"));
    box.classList.add("box");

    const link = box.appendChild(document.createElement("a"));
    link.textContent = "Projeto";
    link.href = "#";
    link.rel = "noopener noreferrer";
  });
}
