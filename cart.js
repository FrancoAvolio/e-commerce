
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
   const modalHeader = document.createElement("div");
   modalHeader.className = "modal-header";
   modalHeader.innerHTML = `
   <h2 class = "modal-header-title">Carrito.</h2>`;
   modalContainer.append(modalHeader)

   const modalButton = document.createElement("h2")
   modalButton.innerText = "X"
   modalButton.className = "modal-header-button";

   modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
   })

   modalHeader.append(modalButton)


carrito.forEach((product) => {  
 let carritoContent = document.createElement("div"); 
  carritoContent.className = "modal-content";
  carritoContent.innerHTML = ` 
  <img src = "${product.img}">
  <h3> ${product.nombre}</h3>
  <p> ${product.precio} $</p>
  <p> Cantidad: ${product.cantidad} </p>
  <span class = "fas fa-chevron-up up"> </span>
  <span class = "fas fa-chevron-down down"> </span>
  <p> Total: ${product.cantidad * product.precio} </p>
  <span class = "delete-product"> X </span>
  `;

modalContainer.append(carritoContent);

let down = carritoContent.querySelector(".down")
let up = carritoContent.querySelector(".up")

down.addEventListener("click", () => {
  if(product.cantidad != 1){
  product.cantidad--
  saveLocal()
  pintarCarrito();}
});

up.addEventListener("click", () => {
  product.cantidad++
  saveLocal()
  pintarCarrito();
})

let eliminar = carritoContent.querySelector(".delete-product");
eliminar.addEventListener("click", () => {
  eliminarProducto(product.id);
})

});

 const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
 const totalCompra = document.createElement("div");
 totalCompra.className = "total-content"
 totalCompra.innerHTML = `Total a pagar: ${total} $`
 modalContainer.append(totalCompra)
};


verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element)=> element.id === id);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  saveLocal();
  pintarCarrito();
}
const carritoCounter = () => {
    cantidadCarrito.style.display = "block"
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();




  


