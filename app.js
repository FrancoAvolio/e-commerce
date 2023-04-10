                              /* Carrito de compras sin DOM ni Eventos*/

// const productos = [
//   { nombre: "harina", precio: 450 },
//   { nombre: "galletitas", precio: 250 },
//   { nombre: "cerveza", precio: 350 },
//   { nombre: "leche", precio: 400 },
//   { nombre: "gaseosa", precio: 520 },
// ];

// const precios = {
//   harina: 450,
//   galletitas: 250,
//   cerveza: 350,
//   leche: 400,
//   gaseosa: 520,
// };

// let carrito = [];

// let select = prompt("Desea comprar algun producto?");
// if (select !== "si" && select !== "no") {
//   alert("Por favor ingresa si o no");
//   select = prompt("Desea comprar algun producto?");
// }

// if (select === "si") {
//   alert("Estos son nuestros productos disponibles:");
//   const todosLosProductos = productos.map(
//     (producto) => `${producto.nombre} ${producto.precio}$`
//   );
//   alert(todosLosProductos.join(" - "));
// do {
//   const producto = prompt("Agrega un producto a tu carrito");
//   const precio = precios[producto];

//   if (precio) {
//     const unidades = Number(prompt("Cuantas unidades desea llevar?"));
//     carrito.push({ producto, unidades, precio });
//   } else {
//     alert("No tenemos ese producto");
//   }

//   select = prompt("Desea seguir comprando?");
// } while (select === "si");

// } else {
//   alert("Gracias!");
// }

// if (carrito.length > 0) {
//   alert("Gracias por la compra");
//   carrito.forEach((carritoFinal) => {
//     alert(
//       `producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`
//     );
//   });
// } else {
//   alert("No se ha comprado ningun producto");
// }

// const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
// console.log (`el total a pagar por su compra es: ${total}`)





                                       //Carrito con Dom y Eventos
                                    
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer")

let carrito = []

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src= "${product.img}">
    <h3> ${product.nombre} </h3>
    <p class="price"> ${product.precio} $</p>
    `;
shopContent.append(content)
let comprar = document.createElement ("button")
comprar.innerText = "Agregar al carrito";
comprar.className = "comprar"
content.append(comprar)

comprar.addEventListener("click",() => {
    carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio
    });
});
});

verCarrito.addEventListener("click", () => {
   const modalHeader = document.createElement("div");
   modalHeader.className = "modal-header";
   modalHeader.innerHTML = `
   <h2 class = "modal-header-title">Carrito.</h2>`;
   modalContainer.append(modalHeader)

   const modalButton = document.createElement("h2")
   modalButton.innerText = "X"
   modalButton.className = "modal-header-button";

   modalHeader.append(modalButton)
});
