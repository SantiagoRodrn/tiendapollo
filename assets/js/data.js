const listaProducto = []

class Producto { constructor(id,nombre,descripcion,catergoria,precio,stock,img){
     this.id = id;
     this.nombre = nombre;
     this.descripcion = descripcion;
     this.catergoria = catergoria;
     this.precio = precio;
     this.stock = stock;
     this.img = img;

    }

}

function agregarProducto (lista,newProducto) {
     lista.push(newProducto);  
}

// Agregar los ocho prodcutos y colocar por diferencias de cada productos.

const Producto1 = new Producto (1,"pollo","pelado","fresco",1000,20,"../assets/img/recetacuarto.jpg")
const Producto2 = new Producto (2,"pollo2","pelado","fresco",1000,20,"img")
const Producto3 = new Producto (3,"pollo3","pelado","fresco2",1000,20,"img")
const Producto4 = new Producto (4,"pollo4","pelado","fresco2",1000,20,"img")
const Producto5 = new Producto (5,"pollo5","pelado","fresco3",1000,20,"img")
const Producto6 = new Producto (6,"pollo6","pelado","fresco3",1000,20,"img")
const Producto7 = new Producto (7,"pollo7","pelado","fresco4",1000,20,"img")
const Producto8 = new Producto (8,"pollo8","pelado","fresco4",1000,20,"img")

// Optimizar las lista de funciones por un for!ricardo

agregarProducto(listaProducto,Producto1);
agregarProducto(listaProducto,Producto2);
agregarProducto(listaProducto,Producto3);
agregarProducto(listaProducto,Producto4);
agregarProducto(listaProducto,Producto5);
agregarProducto(listaProducto,Producto6);
agregarProducto(listaProducto,Producto7);
agregarProducto(listaProducto,Producto8);



console.log("listado",listaProducto); 
console.log("producto1",Producto1);

export default listaProducto ; 