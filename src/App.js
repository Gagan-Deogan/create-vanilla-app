import "./App.css";
import Logo from "./logo.svg";

export const App = () => {
  document.getElementById("root").innerHTML = `
    <img src="${Logo}" class="logo-image" />
    <h1>Edit index.js and save toss reloads</h1>
  `;
};
