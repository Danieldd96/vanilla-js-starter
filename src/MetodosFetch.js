///Funciones Fetch 

///Metodo POST
export async function darDatos(pass,user){///Este es el metodo que guardara mis tareas en el api
    try {
        let usuarios={
            fecha:Date.now(),
            user:user.value,
            pass:pass.value
        }
        const respuesta = await fetch("http://localhost:3000/api/todo",{
           method: "POST",
           headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(usuarios)
        })
        const Datos = await respuesta.json()
        console.log(Datos)
    } catch (error) {
        console.error(error);
    }
}
///Metodo GET
export async function getUsuarios() {///Este metodo obtendra las tareas guardadas en el api
    try {
        const response = await fetch("http://localhost:3000/api/todo")
        let listarUsuarios =await response.json()
        return listarUsuarios

    } catch (error) {
        console.log(error)
    }

};
export async function actualizarContraseña(element,InputCambioPass,InputCambioUser) {///En este metodo cambiaremos el estado de la tarea actualizando la api
    try {
            element.user = InputCambioUser
            element.pass = InputCambioPass

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
export async function deleteData(idRegistrado) {

  
    try {
        const response = await fetch(`http://localhost:3000/api/todo/${idRegistrado}`,{
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