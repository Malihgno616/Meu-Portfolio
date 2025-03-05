import "../section.js"; // Deve estar no topo do arquivo, antes de qualquer outro código

btnProject.addEventListener("click", function (event) {
  event.preventDefault();

  const paragraph = document.createElement("p");
  paragraph.textContent = "Testando";

  const mainElement = document.querySelector(".main");
  if (mainElement) {
    mainElement.appendChild(paragraph);
  } else {
    console.error("Element with class 'main' not found.");
  }
});
