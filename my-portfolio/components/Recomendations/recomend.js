import "./recomend.css";

export const recomendation = (recomendaciones) =>
  `
<a class="recomendLink" href=${recomendaciones.link}> <img src=${recomendaciones.icon}/> <p>${recomendaciones.title}` +
  ` - ` +
  `${recomendaciones.description}</p></a>`;
