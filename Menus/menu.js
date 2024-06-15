window.onload = display;

async function display() {
    var container = document.getElementById("items");

    const response = await fetch("menus.json");
    const data = await response.json();
    const menuName = document.getElementById("menuName").innerText;

    const menu = data.menus.find(menu => menu.title == menuName);

    menu.items.forEach(item => {
        var listItem = document.createElement("li");
        var name = document.createElement("h2");
        var description = document.createElement("p");

        name.className = "name";
        description.className = "description";
        listItem.className = "item";

        name.innerHTML = item.name;
        description.innerHTML = item.description;

        listItem.appendChild(name);
        listItem.appendChild(description);

        container.appendChild(listItem);
    });
}
