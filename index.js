import { fetchJSONData } from "./fetchMethod";

function createButtons() {
    var container = document.getElementById("menuDiv");
    var data = fetchJSONData("./Menus/menus.json");
    console.log(data);
    container.appendChild();
}
