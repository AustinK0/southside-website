function createButtons() {
    var container = document.getElementById("menuDiv");
    var data = fetchJSONData("./Menus/menus.json");
    console.log(data);
    console.log(data.menus);
    //data.menus.forEach(menu => {
    //    var button = document.createElement("button");
    //    button.innerText = menu.title;
    //    container.appendChild(button);
    //});
}
function fetchJSONData(path) {
    fetch(path)
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            console.log(data))
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}