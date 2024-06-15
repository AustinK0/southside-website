async function createButtons() {
    var container = document.getElementById("menuDiv");

    const response = await fetch("./Menus/menus.json");
    const data = await response.json();
    console.log(data);

    console.log(movies);

    data.menus.forEach(menu => {
        var button = document.createElement("button");
        button.innerText = menu.title;
        container.appendChild(button);
    });
}