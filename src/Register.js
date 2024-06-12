import { darDatos } from "./MetodosFetch";


let PagLogin = document.getElementById("loginBtn")         ///Boton para redireccionar a la pagina de login
let BotonRegister = document.getElementById('btnRegister') ///Boton para mandar el registro
let pass= document.getElementById('password');             ///Input para contraseña
let user =document.getElementById('name');                 ///Input de usuario

console.log("hola...")
PagLogin.addEventListener("click",()=> {
    window.location.href="index.html"
 })
BotonRegister.addEventListener('click',async(e)=>{
    e.preventDefault()
    await darDatos(pass,user)
})