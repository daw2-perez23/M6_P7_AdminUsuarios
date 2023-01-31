import { about } from "../vistas/about";
import { admin } from "../vistas/admin";
import { home } from "../vistas/home";
import Swal from "sweetalert2";

export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template;
        home.script()
    },
    admin: ()=>{
        document.querySelector('main').innerHTML = admin.template
        adminUser.script()
        
    },
    about: ()=>{
        document.querySelector('main').innerHTML = adminUser.template
        adminUser.script()
    },
    eliminar: (event)=>{
        let id = event.target.dataset.id
        Swal.fire({
            title: '¿Seguro?',
            text: `Estás eliminando el usuario con id: ${id}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Borrado',
                'El usuario ha sido eliminado',
                'success'
              )
            }
          })
        const classId = document.getElementById(id); 
        
    },
    editar: (event)=>{
        let id = event.target.dataset.id
        Swal.fire(`Estás editando el usuario con id: ${id}`)
        const classId = document.getElementById(id); 
        console.log(classId)
    }
}