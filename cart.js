
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
  `;

modalContainer.append(carritoContent);
let eliminar = document.createElement("span");
eliminar.innerText = "X";
eliminar.style.color = "red"
eliminar.className = "delete-product";
carritoContent.append(eliminar)
eliminar.addEventListener("click",eliminarProducto)
});

 const total = carrito.reduce((acc, el) => acc + el.precio, 0)
 const totalCompra = document.createElement("div");
 totalCompra.className = "total-content"
 totalCompra.innerHTML = `Total a pagar: ${total} $`
 modalContainer.append(totalCompra)
};


verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const foundId = carrito.find((element)=> element.id);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  pintarCarrito();
}