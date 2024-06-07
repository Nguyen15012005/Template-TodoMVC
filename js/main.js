import { attach } from "../store.js";
import App from "../component/App.js"; 
const rootElement = document.getElementById("root");

attach(App, rootElement);
