const precio = 400000;
const cantidadElement = document.querySelector(".cantidad");

// Scope de Función
function calcularPrecioTotal(cantidad, precio) {
  const amount = Number(cantidad);
  const price = Number(precio);
  const total = price * amount;

  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(total);
}
// Falta agregar lo de los decimales
function aumentarUnidades() {
  const precioTotalElement = document.querySelector(".valor-total");

  const cantidadElement = document.querySelector(".cantidad");
  const cantidadValue = Number(document.querySelector(".cantidad").innerHTML);
  const nuevaCantidad = cantidadValue + 1;

  cantidadElement.innerHTML = nuevaCantidad;

  const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
  precioTotalElement.innerHTML = valorTotal;
  console.log(cantidadValue, valorTotal);
}

function disminuirUnidades() {
  const precioTotalElement = document.querySelector(".valor-total");
  const cantidadElement = document.querySelector(".cantidad");
  const cantidadValue = Number(document.querySelector(".cantidad").innerHTML);

  if (cantidadValue > 0) {
    const nuevaCantidad = cantidadValue - 1;
    cantidadElement.innerHTML = nuevaCantidad;
    const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
    precioTotalElement.innerHTML = valorTotal;
    console.log(valorTotal);
  }
}

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
