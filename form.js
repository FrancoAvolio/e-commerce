const formularioCompra = document.getElementById("formularioCompra");
formularioCompra.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const tarjeta = document.getElementById("tarjeta").value;

  swal({
    title: "Tu compra fue realizada con exito",
    text: "A la brevedad recibirás el producto en el domicilio indicado",
    icon: "success"
  })
});
