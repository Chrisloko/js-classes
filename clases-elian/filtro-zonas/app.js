

// salas
// terrazas
// habitaciones
// banos
// cocina
// vesibulo
// comdor

let selectImages = document.querySelectorAll(".filter-me");


let filter = (id) => {
    selectImages.forEach((image, index) => {
        if(!image.classList.contains(id)){
            console.log('filter me');
            image.classList.add("borrar-img");
        }

    });
    console.log(id);

}

console.log("sup");

