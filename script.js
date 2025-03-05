const btn = document.getElementById("btn-section");

// função que cria a section
function handleClick(event) {
  event.preventDefault();

  if (document.querySelector(".section")) {
    return;
  }

  const section = document.createElement("section");
  section.classList.add("section", "animate__animated", "animate__fadeInLeft");

  const title = document.createElement("h1");
  title.innerHTML = "Sejam bem-vindos!!!";

  const txt = document.createElement("p");
  txt.innerHTML =
    "Este site apresenta uma coleção de projetos em desenvolvimento e projetos em andamento. Fiquem a vontade de olharem outros repositórios do meu GitHub.";

  section.appendChild(title);
  section.appendChild(txt);

  const btnProject = document.createElement("button");
  btnProject.innerText = "Clique aqui para acessar meus projetos";
  btnProject.classList.add("btn", "animate__animated", "animate__fadeInLeft");

  document.querySelector(".main").appendChild(section);
  document.querySelector(".main").appendChild(btnProject);

  localStorage.setItem("show", "true");
  btn.removeEventListener("click", handleClick);
}

// evita de criar outra vez a section criada
if (localStorage.getItem("show") === "true") {
  if (!document.querySelector(".section")) {
    const section = document.createElement("section");
    section.classList.add(
      "section",
      "animate__animated",
      "animate__fadeInLeft"
    );

    const title = document.createElement("h1");
    title.innerHTML = "Sejam bem-vindos!!!";

    const txt = document.createElement("p");
    txt.innerHTML =
      "Este site apresenta uma coleção de projetos em desenvolvimento e projetos em andamento. Fiquem a vontade de olharem outros repositórios do meu GitHub.";

    section.appendChild(title);
    section.appendChild(txt);

    const btnProject = document.createElement("button");
    btnProject.innerText = "Clique aqui para acessar meus projetos";
    btnProject.classList.add("btn", "animate__animated", "animate__fadeInLeft");

    document.querySelector(".main").appendChild(section);
    document.querySelector(".main").appendChild(btnProject);
  }

  btn.removeEventListener("click", handleClick);
}

btn.addEventListener("click", handleClick);
