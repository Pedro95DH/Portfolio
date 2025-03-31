import "./Recomendations.css";
import { cleanPage } from "../utils/cleanPage";
import { Divider } from "../components/Divider/Divider";
import { recomendation } from "../components/Recomendations/recomend";
import { recomendations } from "../data/recomendations";

export const Recomendations = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
      <section class="recomendations">
      <h2>Mis Páginas Recomendadas</h2>
      ${Divider()}
      <div class="recomendContainer"></div>
      </section>`;
  const container = document.querySelector(".recomendContainer");
  for (const recomends of recomendations) {
    const div = document.createElement("div");
    div.innerHTML = recomendation(recomends);
    container.appendChild(div);
    const img = div.querySelector("a img");
    img.setAttribute("data-inverted", recomends.blackWhite);
  }
};
