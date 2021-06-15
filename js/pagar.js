//TEST-1e8407d0-19e7-494b-905f-0aacc38e52e3
//TEST-7453078987205980-061502-6ac934d2446103dc36c7d3181fcba08e-775731448

const arrayJson = []

async function generarLinkPago(){
    for(producto of carrito){
        let auxJson = {

            title: producto.nombre,
            description: producto.categoria,
            picture_url: producto.img,
            category_id: "cat123",
            quantity: 1,
            currency_id: "ARS",
            unit_price: producto.precio,
        }
        arrayJson.push(auxJson)
    }
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization': 'Bearer TEST-7453078987205980-061502-6ac934d2446103dc36c7d3181fcba08e-775731448',
        },
        body: JSON.stringify({
            "items": arrayJson,
            
        }) 
    });
    const data = await response.json()
    console.log(data);

    window.open(data.init_point,'_blank');
}