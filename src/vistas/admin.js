import { adminUsuarios } from "../componentes/adminUsuarios"
import { router } from "../componentes/router"

export const admin = {
	template: 
    `   
   <div>
    ${adminUsuarios.template}
   </div> 
    ` ,
    
	eventos: ()=>{

        document.querySelector('main').addEventListener("click",(event)=>{
            if(event.target.classList.contains('borrar')){
                router.eliminar(event)
            } else if (event.target.classList.contains('editar')){
                router.editar(event)
            }

        })
    }
}
