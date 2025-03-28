import "./recomend.css";

export const recomendation = (recomendaciones) =>
  `
<a class="recomendLink" href=${recomendaciones.link}> <img src=${recomendaciones.icon} alt=${recomendaciones.title}/> <p>${recomendaciones.title}` +
  ` - ` +
  `${recomendaciones.description}</p></a>`;
