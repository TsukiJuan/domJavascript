//Creating class user//

class user {
   userData(name,age) {
      this.name = name;
      this.age = age;
   }
};


class admin extends user {
    showMessage(){
       return  `Hola, ${this.name}, tienes ${this.age} y eres administrador`;
   }
}

class comercial extends user{
    showMessage(){
        return `Hola, ${this.name}, tienes ${this.age} y eres comercial`;
    }
}


//CREATING DATA//
   const adminOne = new admin("Juan David",19);
   const comercialOne = new comercial("Diego Alejandro",39);

   let mostrarAdmin = true;

   document.getElementById("action").addEventListener("click", () => {
       const mensaje = mostrarAdmin ? admin.showMessage() : comercial.showMessage();
       document.getElementById("output").innerText = mensaje;
       mostrarAdmin = !mostrarAdmin;
   });


