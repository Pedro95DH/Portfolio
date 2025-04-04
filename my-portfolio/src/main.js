import "./style.css";
import { changeTheme } from "../components/Navbar/Navbar";
import { linkPage } from "../utils/linkPage";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../pages/Home";
import { Projects } from "../pages/projects";
import { Divider } from "../components/Divider/Divider";
import { Recomendations } from "../pages/Recomendations";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#recomendlink", Recomendations);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());