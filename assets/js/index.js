import listaProducto from "./data.js";

let tarjetasInicio = document.getElementById("listadosProductos");

for (const producto of listaProducto) {
    let tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.innerHTML = ` <img src=${producto.img} alt="Cuartos" />
         <div class="card-info">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}<br />
                Precio : $ ${producto.precio}
            </p>
            <button>Realizar pedido</button>
          </div>`;

    tarjetasInicio.appendChild(tarjeta);
    
}


