const contenido = document.getElementById('ingreso')  ///Elemento input
const boton = document.getElementById('btn')       ///Elemento Button
const lista = document.getElementById('container')  ///Elemento :Ul
boton.addEventListener("click", async (e) =>{  
    e.preventDefault();
    const texto = contenido.value;    ///El const me ayudara para obtener el valor del input llamado contenido.
    if (texto !== "" & texto!==" ") {
        
        let tareas = await darDatos(texto);
        
        contenido.value = "";
    }
    location.reload(    )
})
export async function darDatos(texto){
    
    try {
        let task={
            fecha:Date.now(),
            tarea:contenido.value,
            estado:false
        }
        const respuesta = await fetch("http://localhost:3000/api/todo",{
           method: "POST",
           headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(task)
        })
        const Datos = await respuesta.json()
        console.log(Datos)
        console.log(`Se agrego la tarea ${task.tarea}`);
        getTareas()
    } catch (error) {
        console.error(error);
    }
}
export async function getTareas(texto) {
    const response = await fetch("http://localhost:3000/api/todo",{
        method: "GET",
        headers: {
         "Content-type": "application/json;",
       }
    })
    try {
        const response = await fetch("http://localhost:3000/api/todo")
        let listarTareas =await response.json()
        listarTareas.forEach(element => {
        const li = document.createElement("h2"); 
        const checkbox = document.createElement("input")
        const p = document.createElement("label"); 
        const BtnBorrar = document.createElement("button") 
        BtnBorrar.textContent= "X" 
        BtnBorrar.className = "BotonBorrar" 
        checkbox.type= "checkbox"  
        checkbox.className="check"
        li.className="tareas"
        p.innerHTML = element.tarea; 
        li.appendChild(checkbox)
        li.appendChild(p); 
        li.appendChild(BtnBorrar)
        lista.appendChild(li); 
        BtnBorrar.addEventListener("click", () => {
        deleteData(element.id)
        location.reload() 
        });
    })
    } catch (error) {
        console.log(error)
    }
};
getTareas()



export async function deleteData(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/todo/${id}`,{
            method:"DELETE",
            headers: {
                "Content-type": "application/json;",
            }
        })
       const Datos = await response.json()
       console.log(Datos)
       console.log(`Se elimino`);
   } catch (error) {
       console.error(error);
       return alert("Error")
   }
}