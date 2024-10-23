document.addEventListener('DOMContentLoaded', () => {
    // Clase padre Usuario
    class Usuario {
      constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
      }
    }
  
    // Clase hija Administrador
    class Administrador extends Usuario {
      constructor(nombre, edad) {
        super(nombre, edad);
      }
  
      mostrarInfo() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Administrador`;
      }
    }
  
    // Clase hija Comercial
    class Comercial extends Usuario {
      constructor(nombre, edad) {
        super(nombre, edad);
      }
  
      mostrarInfo() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Comercial`;
      }
    }
  
    // Crear instancias de Administrador y Comercial
    const admin = new Administrador('Juan', 35);
    const comercial = new Comercial('María', 28);
  
    // Seleccionar elementos del DOM
    const boton = document.querySelector('.action');
    const output = document.querySelector('.output');
  
    let rol = 0; // Declarar la variable rol con let para que sea accesible y modificable

    // Función para cambiar el valor de rol
    function cambio() {
      if (rol === 0) {
        rol = 1;
      } else {
        rol = 0;
      }
    }
    
    // Configurar el botón para mostrar información
    boton.textContent = 'Mostrar Información';
    boton.onclick = () => {
      // Llamar a la función cambio para alternar el valor de rol
      cambio();
    
      // Mostrar información de un Administrador o Comercial dependiendo del valor de rol
      if (rol === 0) {
        output.textContent = `${admin.mostrarInfo()}`;
      } else {
        output.textContent = `${comercial.mostrarInfo()}`;
      }
    };
    
  });
  
  


