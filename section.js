const btn = document.getElementById("btn-section");
let btnProject;

function createSectionAndButton() {
  const section = document.createElement("section");
  section.classList.add("section", "animate__animated", "animate__fadeInLeft");

  const title = document.createElement("h1");
  title.innerHTML = "Sejam bem-vindos!!!";

  const txt = document.createElement("p");
  txt.innerHTML =
    "Este site apresenta uma coleção de projetos em desenvolvimento e projetos em andamento. Fiquem a vontade de olharem outros repositórios do meu GitHub.";

  section.appendChild(title);
  section.appendChild(txt);

  document.querySelector(".main").appendChild(section);

  btnProject = document.createElement("button");
  btnProject.classList.add("btn", "animate__animated", "animate__fadeIn");
  btnProject.innerHTML = "Clique aqui para acessar meus projetos";

  section.after(btnProject);

  localStorage.setItem("show", "true");
}

function handleClick(event) {
  event.preventDefault();

  if (document.querySelector(".section")) {
    return;
  }

  createSectionAndButton();
  btn.removeEventListener("click", handleClick);
}

if (localStorage.getItem("show") === "true") {
  if (!document.querySelector(".section")) {
    createSectionAndButton();
  }
  btn.removeEventListener("click", handleClick);
} else {
  btn.addEventListener("click", handleClick);
}
