// Inserte el código aquí
const contenido = document.getElementById('ingreso')  ///Elemento input
const boton = document.getElementById('btn')       ///Elemento Button
const lista = document.getElementById('container')  ///Elemento :Ul

boton.addEventListener("click",(e) =>{  
    e.preventDefault();
    const texto = contenido.value;    ///El const me ayudara para obtener el valor del input llamado contenido.
    if (texto !== "") {
        const li = document.createElement("h2"); ///Este const me ayuda a crear un elemento "li".
        const checkbox = document.createElement("input")
        const p = document.createElement("label"); ///Este const me ayuda a crear un elemento "p".
        checkbox.type= "checkbox"
        checkbox.className="check"
        
        p.textContent = texto;   ///Aqui estoy Haciendo que el const p que se vaya a crear tenga el contenido del input.
        li.appendChild(checkbox)
        li.appendChild(p);      ///En este busca en li y agrega el const "p" el cual crea un elemento en el html.
        li.appendChild(ButonDeBorrar())
        lista.appendChild(li); ///Aqui busca en un "ul" con un id "lista" y agrega el const "li" el cual crea un elemento en el html.
        contenido.value = ""
        
    }
})
function ButonDeBorrar() {
    const BtnBorrar = document.createElement("button")
    BtnBorrar.textContent= "X"
    BtnBorrar.className = "BotonBorrar"
    BtnBorrar.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        lista.removeChild(item);
    })
    return BtnBorrar
}
console.log("hola")