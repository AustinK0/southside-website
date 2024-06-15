
async function display() {
    var container = document.getElementById("items");

    const response = await fetch("./Menus/menus.json");
    const data = await response.json();
    const menuName = document.getElementById("menuName").innerText;

    const menu = data.menus.find(menu => menu.title == menuName);

    menu.items.forEach(item => {
        var name = document.createElement("h3");
        var description = document.createElement("h5");
        name.className = "name"
        description.className = "description"
        name.innerText = item.name;
        description.innerText = item.description;

        container.appendChild(name);
        container.appendChild(description);
    });
}
