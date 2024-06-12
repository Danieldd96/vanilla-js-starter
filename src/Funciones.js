import { getUsuarios } from "./MetodosFetch";
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
     
      }
      
   });
   
})

linkCambio.addEventListener('click',()=>{
   let input =document.createElement("input");

})
