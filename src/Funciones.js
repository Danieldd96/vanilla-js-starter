import { getUsuarios } from "./MetodosFetch";
import { actualizarContraseña } from "./MetodosFetch";
let PagRegistro = document.getElementById("PagRegister");  ///Boton para pasar a la pagina de registro
let BotonLogin = document.getElementById('btnLo')          ///Para Iniciar secion
let linkCambio = document.getElementById('cambio')

console.log(BotonLogin)
PagRegistro.addEventListener("click",()=> {
   window.location.href="registro.html"
})
BotonLogin.addEventListener('click',async()=>{
   let users = document.getElementById('user').value
   let passw = document.getElementById('pass').value
   ListaUs = await getUsuarios()
   console.log(ListaUs);
   ListaUs.forEach(element => {
      if (users === element.user && passw === element.pass) {
         window.location.href="Inicio.html"
         localStorage.setItem("nombreUsuario",element.user)
         localStorage.setItem("idUsuario",element.id)
      }else{
         alert('Usuario/o contraseña incorrectos')
      }
   }); 
})

linkCambio.addEventListener('click',()=>{
   const NuevaPass = document.getElementById('NuevaPass')
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

   Btnchange.addEventListener('click',async()=>{
      let ListaUs = await getUsuarios()
      const InputCambio = document.getElementById("InputCambio").value
      const InputCambioPass = document.getElementById('CambiarPass').value
      ListaUs.forEach(element => {
         if (InputCambio === element.user) {
            CambioContraseña(element,InputCambioPass)
            
         }
         
      });
   })
})
async function CambioContraseña (element,InputCambioPass) {
   await actualizarContraseña(element,InputCambioPass)
}