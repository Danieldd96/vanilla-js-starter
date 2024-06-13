import { deleteData } from "./MetodosFetch"
import { actualizarContraseña } from "./MetodosFetch"
const nameUser = document.getElementById('user-name')
const BtnEliminar = document.getElementById('btnEliminar')
const CambioDatos=document.getElementById('CambioDatos')
const LogOut=document.getElementById('LogOut')


window.addEventListener('load',()=>{
    nameUser.innerHTML=localStorage.getItem("nombreUsuario")
})

let idRegistrado = localStorage.getItem("idUsuario")

LogOut.addEventListener("click",()=>{
    window.location.href="index.html"
})
BtnEliminar.addEventListener('click',  () => {
  borrarCuenta(idRegistrado)
})

async function borrarCuenta(idRegistrado) {
    console.log( idRegistrado)
    await deleteData(idRegistrado)
    localStorage.clear()
    setTimeout(() => {
        window.location.href="index.html"
    }, 2000);
}

CambioDatos.addEventListener('click',()=>{
   const NuevaPass = document.getElementById('ContBtn')
   let input =document.createElement("input");
   let inputPass =document.createElement("input");
   let Btnchange=document.createElement('button')
   Btnchange.textContent="Cambiar"
   input.id="InputCambio"
   input.placeholder='Nombre de Usuario'
   inputPass.id="CambiarPass"
   inputPass.placeholder="Nueva Contraseña"
   NuevaPass.appendChild(input)
   NuevaPass.appendChild(inputPass)
   NuevaPass.appendChild(Btnchange)
   Btnchange.addEventListener('click',(idRegistrado)=>{
      const InputCambioUser = document.getElementById("InputCambio").value
      const InputCambioPass = document.getElementById('CambiarPass').value

        CambioContraseña(idRegistrado,InputCambioPass,InputCambioUser)
  
   })
})
async function CambioContraseña (idRegistrado,InputCambioPass,InputCambioUser) {
    await actualizarContraseña(idRegistrado,InputCambioPass,InputCambioUser)
 }