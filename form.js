const formularioCompra = document.getElementById("formularioCompra");
formularioCompra.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const tarjeta = document.getElementById("tarjeta").value;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("direccion", direccion);
  localStorage.setItem("tarjeta", tarjeta);

  swal({
    title: "Tu compra fue realizada con éxito",
    text: "A la brevedad recibirás el producto en el domicilio indicado",
    icon: "success"
  });
});

const nombreGuardado = localStorage.getItem("nombre");
const direccionGuardada = localStorage.getItem("direccion");
const tarjetaGuardada = localStorage.getItem("tarjeta");

if (nombreGuardado && direccionGuardada && tarjetaGuardada) {
  document.getElementById("nombre").value = nombreGuardado;
  document.getElementById("direccion").value = direccionGuardada;
  document.getElementById("tarjeta").value = tarjetaGuardada;
}