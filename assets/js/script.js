//Creo una constante con el valor del producto
const precio = 400000;
//Creo una constante para identificar la cantidad en el dom
const cantidadElement = document.querySelector(".cantidad");

//Función con dos parametros (cantidad * precio)
function calcularPrecioTotal(cantidad, precio) {
  //declaro las constantes de cantidad y precio y las transformo en number para asegurarme que no sea un string
  const amount = Number(cantidad);
  const price = Number(precio);

  //Creo la constante total que va a ser = a amount * price
  const total = price * amount;

  //Transformo el valor total en decimal
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 2, // Establece el mínimo de dígitos fraccionarios a 2
  }).format(total);
}

//Creo la función con la que al hacer click en el botón de mas, vaya aumentando la cantidad de productos y multiplique el valor del precio
function aumentarUnidades() {
  //creo constante que identifique en el documento donde esta el valor total
  const precioTotalElement = document.querySelector(".valor-total");
  //creo constante que identifique en el documento donde esta la cantidad
  const cantidadElement = document.querySelector(".cantidad");
  //creo constante que me muestre el contenido dentro de la const cantidad y transforme el valor en number
  const cantidadValue = Number(document.querySelector(".cantidad").innerHTML);
  //Tomo la const nuevaCantidad del valor de cantidad transformado en number y le sumo 1 digito cada vez que haga on click
  const nuevaCantidad = cantidadValue + 1;

  //Hago que el valor de la const nuevaCantidad se refleje en la const cantidadElement (que identifica la cantidad en el dom) se vea reflejada en el dom
  cantidadElement.innerHTML = nuevaCantidad;

  //Uso la función de valor total que cree y la paso los argumentos de nuevaCantidad y precio
  const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
  console.log(
    "En amuentar: el valorTotal es = " +
      valorTotal +
      " y la nuevaCantidad es = " +
      nuevaCantidad
  );

  //llamo el identificador precioTotalElement (que identifica el .valor-total en el dom) y hago que muestro el valorTotal en el dom
  //en este caso el valorTotal es la función que se lleva a cabo multiplicando el precio por la cantidad
  precioTotalElement.innerHTML = valorTotal;
}

//función para disminuir unidades
function disminuirUnidades() {
  //const precioTotalElement que identifica el .valor-total en el dom
  const precioTotalElement = document.querySelector(".valor-total");
  // const cantidadElement que identifica la .cantidad en el dom y te refleja <span class="cantidad">0</span>
  const cantidadElement = document.querySelector(".cantidad");

  //const cantidadValue identifica el valor número que se encuentra dentro de la clase .cantidad en el dom, en este caso "0" en vez de <span class="cantidad">0</span>
  const cantidadValue = Number(document.querySelector(".cantidad").innerHTML);

  //Creo el condicional que solo se lleva a cabo la función si el número cantidadValue es mayor a 0
  if (cantidadValue > 0) {
    //si es mayor a 0, la const nuevaCantidad va a ser igual a cantidadValue - 1
    const nuevaCantidad = cantidadValue - 1;
    // la const cantidadValue me muestra la cantidad total en el dom. Y cantidadElement.innerHTML me muestra la nuevaCantidad que se ve en el dom despues que se le reste 1 cantidad
    cantidadElement.innerHTML = nuevaCantidad;

    //creo la const valorTotal que sera igual a la función calcularPrecioTotal con los argumentos que les paso
    const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);

    //vuelvo a ajusta el valor de precioTotalElement (que identifica la clase .valor total en el dom) con la nueva cantidad de valortotal que disminuí al hacer on click
    precioTotalElement.innerHTML = valorTotal;

    console.log(
      "En disminuir: el valorTotal es = " +
        valorTotal +
        " y la nuevaCantidad es = " +
        nuevaCantidad
    );
  }
}

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
