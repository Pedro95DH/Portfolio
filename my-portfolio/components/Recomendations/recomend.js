import "./recomend.css";

export const recomendation = (recomendaciones) =>
  `
<a href=${recomendaciones.link}> <img src=${recomendaciones.icon}/> <p> ${recomendaciones.title} + ` -
  ` + ${recomendaciones.description}</p><a>`;