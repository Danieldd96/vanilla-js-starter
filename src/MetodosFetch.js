///Funciones Fetch 

///Metodo POST
export async function darDatos(contenido){///Este es el metodo que guardara mis tareas en el api
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
    } catch (error) {
        console.error(error);
    }
}
///Metodo GET
export async function getTareas() {///Este metodo obtendra las tareas guardadas en el api
    try {
        const response = await fetch("http://localhost:3000/api/todo")
        let listarTareas =await response.json()
        return listarTareas

    } catch (error) {
        console.log(error)
    }

};
///Metodo put
export async function actualizarTarea(element) {///En este metodo cambiaremos el estado de la tarea actualizando la api
    try {
        element.estado=!element.estado
        console.log(element)
        const response = await fetch (`http://localhost:3000/api/todo/${element.id}`,{
            method:"PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(element)
        })
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}
///Metodo DELETE
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