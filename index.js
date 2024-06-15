window.onload = createButtons;

async function createButtons() {
    var container = document.getElementById("menuDiv");

    try {
        const response = await fetch("./Menus/menus.json");
        const data = await response.json();

        data.menus.forEach(menu => {
            if (menu.show) {
                var button = document.createElement("button");
                button.innerText = menu.title;

                button.onclick = function () {
                    window.location.href = `./Menus/${menu.title}.html`;
                };

                container.appendChild(button);
            }
        });
    } catch (error) {
        console.error("Failed to fetch menus:", error);
    }
}