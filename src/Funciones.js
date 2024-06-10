import { darDatos } from "./MetodosFetch"
import { getTareas } from "./MetodosFetch"
import { actualizarTarea } from "./MetodosFetch"
import { deleteData } from "./MetodosFetch"

const contenido = document.getElementById('ingreso')        ///Elemento input en el que se colocaran el nombre de las tareas
const boton = document.getElementById('btn')                ///Elemento Button que activara las funciones
const lista = document.getElementById('container')          ///Elemento :Ul que contendra las tareas
const contador = document.getElementById('contador')        ///Este elemento es una etiqueta <p> que contendra el contador

boton.addEventListener("click", async (e) =>{               ///Este boton es el encargado de activar las funciones que guardan borran y actualizaran tareas 
    e.preventDefault();                                     ///Esto me ayudara a que la pagina no se recargue
    const texto = contenido.value.trim();                   ///Este const me ayudara para obtener el valor del input llamado contenido.
    if (texto !== "") {                                     ///Este if tiene como Funcion no dejar colocar espacios vacios como tarea
        await darDatos(contenido);                          ///Aqui esperaremos la respuesta de dardatos y le pasaremos el parametro contenido
        listarTareas()                                      ///Y se llamara a la funcion listarTareas que creara la parte visual de la pagina
        contenido.value = "";                               ///Con contenido.value haremos que el input se vacie al mandar la tarea
    }else{
        alert("Ingrese texto")
    }
})

async function listarTareas() {

    let tareas = await getTareas()                                  ///let tareas esperara la respuesta de getTareas
    lista.innerHTML="";                                             ///Me ayudara a no ver contenido duplicado
    let completadas = 0;                                            ///Sera el que recibira el numero que se mostrara en el contador de tareas en el html

        tareas.forEach(element => {                                 ///El contenido de getTareas se recorrera creando lo que contiene element
            const h2 = document.createElement("h2");                ///El const h2 servira para crear un elemento <h2>
            const checkbox = document.createElement("input");       ///El const checkbox servira para crear un elemento <input> que sera el encargado que al marcar el check completara una tarea
            const label = document.createElement("label");          ///El const label servira para crear un elemento <label> en el cual estara el nombre de la tarea
            const BtnBorrar = document.createElement("button");     ///El const BtnBorrar servira para crear un elemento <button> que borrara las tareas

            BtnBorrar.textContent= "X";                             ///Al Boton que servira para borrar se le colocara el texto X
            BtnBorrar.className = "BotonBorrar";                    ///Al boton se le colocara un class con el nombre "BotonBorrar" el cual utilizare para realizar estilos

            checkbox.type= "checkbox";                              ///Servira para que el input antes creado obtenga el tipo que necesitamos que sera checkbox
            checkbox.className="check";                             ///Al checkboc se le colocara un class con "check" para realizar estilos
            
            label.innerHTML = element.tarea;                        ///El label mostrara en el html mostrara el nombre de la tarea que obtendremos del api
            
            checkbox.checked = element.estado;                      ///El input marcado contendra el estado de la tarea del api

            checkbox.addEventListener("click",async()=>{            ///El evento checkbox tendra un evento que al darle click esperara la respuesta de actualizarTarea y se le pasara el parametro element
                await actualizarTarea(element);
                listarTareas()
            })

            if (element.estado) {                                   ///El estado de la tarea aumentara el valor de completadas que es el const que contendra el numero del contador de tareas completadas     
                completadas++
            }

            h2.appendChild(checkbox)                                ///Dentro del h2 se creara un input checkbox que al marcarse aumentara el contador
            h2.appendChild(label);                                  ///Dentro del h2 se creara un label que contendra las tareas
            h2.appendChild(BtnBorrar)                               ///Dentro del h2 se creara un boton el cual borrara las tareas
            lista.appendChild(h2);                                  ///Dentro del const lista que seria un <UL> se creara un <h2>>

            BtnBorrar.addEventListener("click",async () => {        ///El BtnBorrar tendra en evento click
                await deleteData(element.id)                        ///Esperara la respuesta del metodo deleteData y le pasaremos los parametros element y id
                listarTareas()                                      ///Llama a la funcion 
        
        });
        
    });
    contador.innerHTML=completadas;                             ///Se agregara al html el contenido de completadas que sera el que muestre el numero del contador de tareas
}
listarTareas()

    