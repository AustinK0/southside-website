window.onload = display;

async function display() {
    var container = document.getElementById("items");

    const response = await fetch("menus.json");
    const data = await response.json();
    const menuName = document.getElementById("menuName").innerText;

    const menu = data.menus.find(menu => menu.title == menuName);

    menu.items.forEach(item => {
        var itemDiv = document.createElement("div");
        var name = document.createElement("h3");
        var description = document.createElement("h5");

        name.className = "name"
        description.className = "description"
        itemDiv.className = "item"

        name.innerHTML = item.name;
        description.innerHTML = item.description;

        itemDiv.appendChild(name);
        itemDiv.appendChild(description);
        container.appendChild(itemDiv);
    });
}
