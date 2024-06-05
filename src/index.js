// Inserte el código aquí
const contenido = document.getElementById('ingreso')  ///Elemento input
const boton = document.getElementById('btn')       ///Elemento Button
const lista = document.getElementById('container')  ///Elemento :Ul
const tareas = document.getElementsByClassName('tareas')


boton.addEventListener("click", async (e) =>{  
    e.preventDefault();
    const texto = contenido.value;    ///El const me ayudara para obtener el valor del input llamado contenido.
    if (texto !== "" & texto!==" ") {
        let tareas = await darDatos();
        let tarea={}
        console.log(tareas)
        
        crearHtml(tarea);
        contenido.value = "";
    }
    location.reload()
})



function crearHtml(tarea) {
    const li = document.createElement("h2"); ///Este const me ayuda a crear un elemento "li".
    const checkbox = document.createElement("input")///Este const me ayuda a realar un "input".
    const p = document.createElement("label"); ///Este const me ayuda a crear un elemento "p".
    checkbox.type= "checkbox"     ///Esto funciona para agregar al input type de tipo texto.
    checkbox.className="check"    ///Y con el class name agrega la etiqueta la cual me permitira darle estilos a el input
    li.className="tareas"
    p.textContent = tarea.tarea;   ///Aqui estoy Haciendo que el const p que se vaya a crear tenga el contenido del input.
    li.appendChild(checkbox)
    li.appendChild(p);      ///En este busca en li y agrega el const "p" el cual crea un elemento en el html.
    li.appendChild(ButonDeBorrar())
    lista.appendChild(li); ///Aqui busca en un "ul" con un id "lista" y agrega el const "li" el cual crea un elemento en el html.
}


function ButonDeBorrar() {
    const BtnBorrar = document.createElement("button") ///Crea un boton en el html que servira para borrar el li.
    BtnBorrar.textContent= "X"    ///El contenido del boton.
    BtnBorrar.className = "BotonBorrar"  ///Lo utilizare para estilizar el boton.
    BtnBorrar.addEventListener("click", (e) => {
        const item = e.target.parentElement; ///Me ayudara comunicarme entre funciones y comunicarme con el elemento padre.
        lista.removeChild(item); ///Esto removeria al hijo de lista .
        deleteData()
    })
    return BtnBorrar

}
let url = "http://localhost:3000/api/todo"

//POST
async function darDatos(){
    try {
        let task={
            fecha:Date.now(),
            tarea:contenido.value,
            estado:false
        }
        const respuesta = await fetch(url,{
           method: "POST",
           headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(task)
        })
        const Datos = await respuesta.json()
        console.log(Datos)
        console.log(`Se agrego la tarea ${task.tarea}`);
    } catch (error) {
        console.error(error);
    }
}


//GET
async function getTareas(id) {
    const response = await fetch(url,{
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
    checkbox.type= "checkbox"     ///Esto funciona para agregar al input type de tipo texto.
    checkbox.className="check"    ///Y con el class name agrega la etiqueta la cual me permitira darle estilos a el input
    li.className="tareas"
    p.textContent = tarea.tarea;   ///Aqui estoy Haciendo que el const p que se vaya a crear tenga el contenido del input.
    li.appendChild(checkbox)
    li.appendChild(p);      ///En este busca en li y agrega el const "p" el cual crea un elemento en el html.
    li.appendChild(ButonDeBorrar(tarea.id))
    lista.appendChild(li); ///Aqui busca en un "ul" con un id "lista" y agrega el const "li" el cual crea un elemento en el html.
        
    });
    
}


   async function deleteData(id) {
     try {
         
         const response = await fetch(`http://localhost:3000/api/todo/task/${id}`,{
             method:"delete",
             headers: {
                 "Content-type": "application/json;",
             }
         })
        const Datos = await response.json()
        console.log(Datos)
        console.log(`Se elimino ${task.id}`);
    } catch (error) {
        console.error(error);
    }
    }




