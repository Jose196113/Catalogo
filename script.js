// Datos de especies (ejemplo)
const especies = [
    {
        nombre: "Oso Polar",
        cientifico: "Ursus maritimus",
        orden: "carnivora",
        imagen: "imagenes/oso-polar.jpg",
        habitat: "Ártico",
        conservacion: "Vulnerable"
    },
    {
        nombre: "Mariposa Monarca",
        cientifico: "Danaus plexippus",
        orden: "lepidoptera",
        imagen: "imagenes/mariposa-monarca.jpg",
        habitat: "América del Norte",
        conservacion: "Preocupación menor"
    },
     {
        nombre: "Escarabajo rinoceronte",
        cientifico: "Dinastes hercules",
        orden: "coleoptera",
        imagen: "imagenes/dinastes.jpg",
        habitat: "América del Norte",
        conservacion: "Preocupación menor"
    },
    {
        nombre: "Chimpancé",
        cientifico: "Pan troglodytes",
        orden: "primates",
        imagen: "imagenes/chimpance.jpg",
        habitat: "África Central",
        conservacion: "En peligro"
    }
];

// Renderizar todas las especies al inicio
function renderEspecies(orden = "todos") {
    const container = document.getElementById("especies-container");
    container.innerHTML = "";

    const filtradas = orden === "todos" 
        ? especies 
        : especies.filter(esp => esp.orden === orden);

    filtradas.forEach(esp => {
        const card = document.createElement("div");
        card.className = "especie-card";
        card.innerHTML = `
            <img src="${esp.imagen}" alt="${esp.nombre}">
            <h2>${esp.nombre}</h2>
            <p><strong>Nombre científico:</strong> <em>${esp.cientifico}</em></p>
            <p><strong>Hábitat:</strong> ${esp.habitat}</p>
            <p><strong>Estado:</strong> ${esp.conservacion}</p>
        `;
        container.appendChild(card);
    });
}

// Eventos del menú lateral
document.querySelectorAll(".taxon-link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const orden = e.target.getAttribute("data-orden");
        renderEspecies(orden);
    });
});

// Inicializar
renderEspecies();