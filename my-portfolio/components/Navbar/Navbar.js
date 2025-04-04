import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const buttonLinks = document.querySelectorAll("a > img");
    buttonLinks.forEach((img) => {
      console.log(img.attributes["data-inverted"]);
      if (
        !img.attributes["data-inverted"] ||
        img.attributes["data-inverted"].value === "true"
      ) {
        img.classList.toggle("inverted");
      }
    });
    changeText();
  });
};

document.addEventListener("click", () => {
  console.log("hola");
  const buttonLinks = document.querySelectorAll("a > img");
  buttonLinks.forEach((img) => {
    if (
      document.body.classList.contains("light") &&
      (!img.attributes["data-inverted"] ||
        img.attributes["data-inverted"].value === "true")
    ) {
      img.classList.add("inverted");
    } else {
      img.classList.remove("inverted");
    }
  });
});

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
<h2>Pedro Díaz</h2>
<ul>
    <li>
        <a href="#" id="homelink">Inicio</a>
    </li>
    <li>
        <a href="#" id="projectslink">Proyectos</a>
    </li>
        <li>
        <a href="#" id="recomendlink">Recomendaciones</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
</ul>
</nav>
`;
