function mostrarProductos() {
    const seleccion = document.getElementById("cliente").value;
    const productosEmpresas = document.getElementById("productos_empresas");
    const productosIndividuos = document.getElementById("productos_individuos");
  
    if (seleccion === "empresas") {
      productosEmpresas.style.display = "block";
      productosIndividuos.style.display = "none";
    } else if (seleccion === "individuo") {
      productosEmpresas.style.display = "none";
      productosIndividuos.style.display = "block";
    }
  }
  

  mostrarProductos();