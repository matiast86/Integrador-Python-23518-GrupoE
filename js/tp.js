function mostrarProductos() {
  const seleccion = document.getElementById("cliente").value;
  const productosEmpresas = document.getElementById("productos_empresas");
  const productosIndividuos = document.getElementById("productos_individuos");

  
  productosEmpresas.style.display = "none";
  productosIndividuos.style.display = "none";

  if (seleccion === "empresas") {
    productosEmpresas.style.display = "block";
  } else if (seleccion === "individuo") {
    productosIndividuos.style.display = "block";
  }
}
  

  mostrarProductos();

//Función para menu responsive

function responsiveMenu() {
  let x = document.getElementById("nav-bar");
  if (x.className === "barra-menu") {
    x.className += "responsive";
  } else {
    x.className = "barra-menu"
  }
}


