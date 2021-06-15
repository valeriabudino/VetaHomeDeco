
// jQuery(()=>{
//     console.log("mostrar lo nuevo")
//     mostrarProductos(newIn)
// })

// variables
let stockProductos
const carrito = []
const carritoEnLocal = []
//botones
//const botonCarrito = document.getElementById('boton-carrito')

const contadorCarrito = document.getElementById('contador')

$(document).ready(()=>{
    traerProductos()
    
})


async function traerProductos(){
    let response = await fetch ("/stock.json");
    let data = await response.json()
    //console.log(data);
    stockProductos = data;
    //console.log(stockProductos)
    document.getElementById('ruta').innerHTML = `   <h5> Home > Shop > All </h5>`
    mostrarProductos(data)
}

 function filtro(valorFiltro) {

    console.log(valorFiltro)

    let arrayFiltrado;

    if(valorFiltro == 'all'){
        arrayFiltrado = stockProductos;
    } else {
        arrayFiltrado = stockProductos.filter( elemento => elemento.categoria == valorFiltro)
    }

    // if(valorFiltroPrecios == 1){
    //     arrayFiltrado = arrayFiltrado.filter(element => element.precio < 1000)
    // } else if( valorFiltroPrecios == 2){
    //     arrayFiltrado = arrayFiltrado.filter(element => element.precio < 5000)
    // } else if( valorFiltroPrecios == 3){
    //     arrayFiltrado = arrayFiltrado.filter(element => element.precio > 5000)
    // }
    console.log(arrayFiltrado)
    document.getElementById('ruta').innerHTML = `  <h5> Home > Shop > ${valorFiltro} </h5>`
    mostrarProductos(arrayFiltrado)  
}



function mostrarCarrito(carrito) {
    
    let contenedorCarrito = document.getElementById('modal-carrito-body')
    contenedorCarrito.innerHTML = ``     

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                <div class="row">
                    <div class="col-2">
                        <button class="boton-eliminar" onclick= "eliminarProducto(${producto.id})" ><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="col-7">
                        <p>${producto.nombre}</p>
                    </div>
                    <div class="col-3">
                        <p> $${producto.precio}</p>
                    </div>
            </div>
        `

        contenedorCarrito.appendChild(div)
    })
    contadorCarrito.innerText = carrito.length
    
    document.getElementById('total-pago').innerHTML = `
                    <div class="row">
                        <div class="col-6"><p class="precioProducto">Total: $<span id="precioTotal"></span></p></div>
                        <div class="col-6"><button class="btn btn-primary" onclick="generarLinkPago()" >Pagar</button></div>
                    </div>`

    mostrarTotal()
}

function agregarAlCarrito(id) {
    let productoElegido = stockProductos.find( el => el.id == id )
    carrito.push(productoElegido)

    localStorage.setItem('carrito', JSON.stringify(carrito))
    //actualizarCarrito(carrito)
    console.log(carrito)
    mostrarCarrito(carrito)
}

function mostrarTotal() {

    let total = carrito.reduce((acc, el) => acc += el.precio, 0)

    document.getElementById('precioTotal').innerHTML = total

    console.log( carrito.reduce((acc, el) => acc += el.precio, 0))
}

function eliminarProducto(id){
    let productoAEliminar = carrito.find( element => element.id == id )
    let i = carrito.indexOf(productoAEliminar)
    if( i!== -1){
        carrito.splice(i,1)
    }
    mostrarCarrito(carrito)
}

//contacto


function contactar() {
    document.getElementById('contacto').innerHTML =`
                                <div class="row" style="padding: 7px;">
                                <div class="col-lg-6 col-xs-12">
                                    <div style="display: flexbox; align-items: center; justify-content: center; padding-top = 25%">
                                    <i class="fas fa-envelope"><small class="text-muted">  vetahomedeco@gmail.com</small></i><br>
                                    <i class="fas fa-mobile"><small class="text-muted">  Tel: 3704214923</small></i>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xs-12">
                                    <from>
                                        <input type="text" class="form-control" id="" placeholder="Nombre"><br>
                                        <input type="text" class="form-control" id="" placeholder="Correo electronico"><br>
                                        <textarea type="text" class="form-control" id="" placeholder="Mensaje"></textarea><br>
                                        <button type="submit" class="btn btn-secondary mr-auto">Enviar</button>
                                    </from>
                                </div>
                                </div>`
}
