// Clase Elemento
class Elemento {
    constructor(parrafoId) {
        this.parrafo = document.getElementById(parrafoId);
    }

    cambiarColorFondo(color) {
        if (this.parrafo) {
            this.parrafo.style.backgroundColor = color;
        } else {
            console.error("Párrafo no encontrado");
        }
    }

    cambiarColorTexto(color) {
        if (this.parrafo) {
            this.parrafo.style.color = color;
        } else {
            console.error("Párrafo no encontrado");
        }
    }
}

// Subclase Boton
class Boton extends Elemento {
    constructor(parrafoId, botonId) {
        super(parrafoId);
        this.boton = document.getElementById(botonId);

        // Añadir un evento de clic al botón
        if (this.boton) {
            this.boton.addEventListener('click', () => this.cambiarColores());
        } else {
            console.error("Botón no encontrado");
        }
    }

    // Método para cambiar tanto el color de fondo como el color del texto
    cambiarColores() {
        const colorFondo = this.generarColorAleatorio();
        const colorTexto = this.generarColorAleatorio();
        this.cambiarColorFondo(colorFondo);
        this.cambiarColorTexto(colorTexto);
    }

    // Método para generar un color aleatorio en formato hexadecimal
    generarColorAleatorio() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor}`;
    }
}

// Ejemplo de uso
document.addEventListener('DOMContentLoaded', () => {
    const elemento = new Boton('miParrafo', 'miBoton');
});
