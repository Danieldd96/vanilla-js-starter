//GET
const lista = document.getElementById('container')  ///Elemento :Ul
const contenido = document.getElementById('ingreso')  ///Elemento input

async function getTareas(id) {
    const response = await fetch("http://localhost:3000/api/todo",{
        method: "GET",
        headers: {
         "Content-type": "application/json;",
       }
    })
    return response.json();
    
}
listarTareas()
async function listarTareas() {
    let tareas = await getTareas();
    tareas.forEach(tarea => {
        const li = document.createElement("h2"); ///Este const me ayuda a crear un elemento "li".
        const checkbox = document.createElement("input")///Este const me ayuda a realar un "input".
        const p = document.createElement("label"); ///Este const me ayuda a crear un elemento "p".
        let buttonDelete = document.createElement("button")
        buttonDelete.textContent= "X"    ///El contenido del boton.
        buttonDelete.className = "BotonBorrar"  ///Lo utilizare para estilizar el boton.
        checkbox.type= "checkbox"     ///Esto funciona para agregar al input type de tipo texto.
        checkbox.className="check"    ///Y con el class name agrega la etiqueta la cual me permitira darle estilos a el input
        li.className="tareas"
        p.textContent = "hola";   ///Aqui estoy Haciendo que el const p que se vaya a crear tenga el contenido del input.
        li.appendChild(checkbox)
        li.appendChild(p);      ///En este busca en li y agrega el const "p" el cual crea un elemento en el html.
        li.appendChild(buttonDelete)
        lista.appendChild(li); ///Aqui busca en un "ul" con un id "lista" y agrega el const "li" el cual crea un elemento en el html.


        buttonDelete.addEventListener("click",(e)=>{
        const item = e.target.parentElement; ///Me ayudara comunicarme entre funciones y comunicarme con el elemento padre.
        lista.removeChild(item); ///Esto removeria al hijo de lista .
        deleteTask()
        })
    });
    
}
export {listarTareas}
