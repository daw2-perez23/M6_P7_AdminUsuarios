import { adminUsuarios } from "../componentes/adminUsuarios"
import { router } from "../componentes/router"

export const admin = {
	template: 
    `
<div class="container">
    <div class="row">
        <div id="vistaAdmin" class="col-8">
            
        </div>
        <div id="vistaRegistro" class="col-4">

        </div>
    </div>
</div>
        

    ` ,
    
	eventos: ()=>{

        document.querySelector('main').addEventListener("click",(event)=>{
            if(event.target.classList.contains('borrar')){
                adminUsuarios.eliminar(event)
            } else if (event.target.classList.contains('editar')){
                adminUsuarios.editar(event)
            }
        })
    }
}
