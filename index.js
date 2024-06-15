function createButtons() {
    var container = document.getElementById("menuDiv");
    var data = fetchJSONData("./Menus/menus.json");
    console.log(data);
    //data.menus.forEach(menu => {
    //    var button = document.createElement("button");
    //    button.innerText = menu.title;
    //    container.appendChild(button);
    //});
}
function fetchJSONData(path) {
    var data = await fetch(path)
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
    return data;
}