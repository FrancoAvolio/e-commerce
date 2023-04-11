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