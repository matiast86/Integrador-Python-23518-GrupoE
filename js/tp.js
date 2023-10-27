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
  
//funcion para activar mostrarProductos solo un contacto.html

function activarMostrarProductos() {

  let paginaActual = window.location.href;
  let ArchivoPaginaActual = paginaActual.substring(paginaActual.lastIndexOf("/") + 1);
  
  if (ArchivoPaginaActual === "contacto.html") {
    mostrarProductos();
  }
}

activarMostrarProductos();


//Función para menu responsive

function responsiveMenu() {
  console.log('responsiveMenu() called');
  let x = document.getElementById("nav-bar");
  if (x.className === "barra-menu") {
      x.className += " responsive";
  } else {
      x.className = "barra-menu";
  }
}



