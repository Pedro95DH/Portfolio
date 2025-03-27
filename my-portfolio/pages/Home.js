import "./Home.css";
import { cleanPage } from "../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, soy</p>
    <h1>Pedro Díaz</h1>
    <p>Soy un estudiante del Máster de Desarrollo Full Stack en The Power. Estoy comenzando en el mundo de la programación y me apasiona aprender como funcionan los lenguajes y como se refleja en las aplicaciones finales,
    como ser convierten en algo útil en el mundo y sirven para resolver las necesidades de los que quieren tener una aplicación web para resolver sus necesidades.</p>
    <a href="mailto:pedrosdhdez@gmail.com">¡Di hola! →</a>
    </section>`;
};