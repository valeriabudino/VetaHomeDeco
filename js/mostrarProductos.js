// NEW IN

// LO MAS VENDIDO

// o ESPEJOS MUEBLES ALMOHADAS

function mostrarProductos(data){

    let card = ``;

    for(let producto of data){

        card += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${producto.img}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${producto.nombre}</h5>
                    <!-- Product price-->
                    $${producto.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick=agregarAlCarrito(${producto.id})>Add to cart</a></div>
            </div>
        </div>
    </div>`;
    }

    document.getElementById('ProductosGaleria').innerHTML = card;
}




