// Inserte el código aquí
const contenido = document.getElementById('ingreso')  ///Elemento input
const boton = document.getElementById('btn')       ///Elemento Button
const lista = document.getElementById('container')  ///Elemento :Ul

boton.addEventListener("click",(e) =>{  
    e.preventDefault();
    const texto = contenido.value;    ///El const me ayudara para obtener el valor del input llamado contenido.
    const li = document.createElement("li"); ///Este const me ayuda a crear un elemento "li".
    const p = document.createElement("p"); ///Este const me ayuda a crear un elemento "p".
    p.textContent = texto;   ///Aqui estoy Haciendo que el const p que se vaya a crear tenga el contenido del input.
    li.appendChild(p);      ///En este busca en li y agrega el const "p" el cual crea un elemento en el html.
    lista.appendChild(li); ///Aqui busca en un "ul" con un id "lista" y agrega el const "li" el cual crea un elemento en el html.
})
console.log("hola")