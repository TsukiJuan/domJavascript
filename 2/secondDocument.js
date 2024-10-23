document.addEventListener('DOMContentLoaded', () => {
    class ListaTareas {
      constructor() {
        // Crear o seleccionar la lista <ul> en el DOM
        this.listaElement = document.createElement('ul');
        this.listaElement.id = 'lista-tareas'; 
        document.body.appendChild(this.listaElement); 
        this.idCounter = 0; // Contador para generar identificadores únicos
      }
  
      // Método para agregar una nueva tarea
      agregarTarea(nombreTarea) {
        // Crear un nuevo elemento <li>
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = nombreTarea;
  
        // Asignar un identificador único al <li>
        nuevaTarea.id = `tarea-${this.idCounter}`;
        this.idCounter++; // Incrementar el contador para la próxima tarea
  
        // Agregar la tarea a la lista <ul> en el DOM
        this.listaElement.appendChild(nuevaTarea);
      }
    }
  
    const miListaTareas = new ListaTareas();
  
    // Seleccionar el botón existente para agregar tareas
    const botonAgregarTarea = document.querySelector('.action');
    botonAgregarTarea.textContent = 'Agregar Tarea';
  
    // Configurar el botón para agregar una tarea al hacer clic
    botonAgregarTarea.onclick = () => {
      const nombreTarea = prompt('Introduce el nombre de la tarea:');
      if (nombreTarea) {
        miListaTareas.agregarTarea(nombreTarea);
      }
    };
  });
  
  