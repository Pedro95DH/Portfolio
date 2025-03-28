import "./technologies.css";

export const techies = (project) => {
  const p = document.createElement("p");
  project.tech.forEach((tech) => {
    const image = document.createElement("img");
    image.classList.add("techLogo");
    image.setAttribute("src",`/public/icons/${tech}.png`)
    image.setAttribute("alt",`Logo de ${tech}`)
    p.appendChild(image);
  });
  console.log(p);
  return p.outerHTML;
};