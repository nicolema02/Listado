const btnagregar = document.getElementById("agregar");
const btnlimpiar = document.getElementById("limpiar");
const contenedor = document.getElementById("contenedor");
const inputItem = document.getElementById("item");

// Cargar elementos desde localStorage al cargar la página
const storedItems = localStorage.getItem("objetos");
if (storedItems) {
    const itemsArray = storedItems.split("\n");
    itemsArray.forEach(item => {
        if (item.trim() !== "") {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = item;
            contenedor.appendChild(li);
        }
    });
}

btnagregar.addEventListener("click", function (e) {
    e.preventDefault();
    const datos = inputItem.value.trim(); // Limpiar espacios en blanco alrededor
    if (datos !== "") {
        let items = localStorage.getItem("objetos") || "";
        items += datos + "\n";
        localStorage.setItem("objetos", items);

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = datos;
        contenedor.appendChild(li);

        inputItem.value = ""; // Limpiar el campo de entrada
    }
});

btnlimpiar.addEventListener("click", function () {
    localStorage.removeItem("objetos");
    contenedor.innerHTML = ""; // Limpia el contenido del contenedor en la interfaz
});