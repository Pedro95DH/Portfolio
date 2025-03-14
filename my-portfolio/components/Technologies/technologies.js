export const techies = (project) => {
  const p = document.createElement("p");
  project.tech.forEach((tech) => {
    const span = document.createElement("span");
    span.innerHTML = tech;
    p.appendChild(span);
  });
  console.log(p);
  return p.outerHTML;
};
