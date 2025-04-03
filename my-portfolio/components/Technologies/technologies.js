import "./technologies.css";

//Modifique como se mostraban las tecnologias en las projectscards, ahora en vez de salir el texto aparece la imagen representativa de cada tecnologia.

export const techies = (project) => {
  const p = document.createElement("p");
  project.tech.forEach((tech) => {
    const image = document.createElement("img");
    image.classList.add("techLogo");
    image.setAttribute("src", `/icons/${tech}.png`);
    image.setAttribute("alt", `Logo de ${tech}`);
    p.appendChild(image);
  });
  console.log(p);
  return p.outerHTML;
};
