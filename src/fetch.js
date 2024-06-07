const contenido = document.getElementById('ingreso')  ///Elemento input
const boton = document.getElementById('btn')       ///Elemento Button
const lista = document.getElementById('container')  ///Elemento :Ul
const contador = document.getElementsByClassName('contador')
boton.addEventListener("click", async (e) =>{  
    e.preventDefault();
    const texto = contenido.value;    ///El const me ayudara para obtener el valor del input llamado contenido.
    if (texto !== "" & texto!=="  ") {/// trim java
        
        let tareas = await darDatos();
        listarTareas()
        contenido.value = "";
    }
    
})
export async function darDatos(){
    
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
        listarTareas()
    } catch (error) {
        console.error(error);
    }
}
async function listarTareas() {

        let tareas=await getTareas()
        lista.innerHTML=""
        tareas.forEach(element => {
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
        checkbox.checked=element.estado
        if (checkbox.checked) {
            contador.value++
            
        }
        li.appendChild(checkbox)
        li.appendChild(p); 
        li.appendChild(BtnBorrar)
        lista.appendChild(li); 
        BtnBorrar.addEventListener("click",async () => {
            await deleteData(element.id)
            listarTareas()
        
        });
        checkbox.addEventListener("click",()=>{
            if (checkbox.checked == true) {
                actualizarTarea(element.id)
                contador.value++
            }else{
                contador.value--
            }
        })
        
    })
    
}

export async function getTareas() {
    try {
        const response = await fetch("http://localhost:3000/api/todo")
        let listarTareas =await response.json()
        return listarTareas

    } catch (error) {
        console.log(error)
    }

};
listarTareas()

///crear put recibe como parametro obj tarea
async function actualizarTarea(id) {
    try {
        let task={
            estado:true
        }
        const response = await fetch (`http://localhost:3000/api/todo/${id}`,{
            method:"PUT",
            headers: {
                "Content-type": "application/json;",
            },
            body:JSON.stringify(task)
        })
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

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