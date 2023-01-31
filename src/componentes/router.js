import { about } from "../vistas/about.js";
import { admin } from "../vistas/admin.js";
import { home } from "../vistas/home.js";
import { adminUsuarios } from "./adminUsuarios.js";
import Swal from "sweetalert2";

export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template;
        home.script()
    },
    admin: ()=>{
        document.querySelector('main').innerHTML = adminUsuarios.template
        adminUsuarios.script()
        admin.eventos()
        
    },
    about: ()=>{
        document.querySelector('main').innerHTML = about.template
        about.script()
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
          confirmButtonText: 'Sí, eliminar',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Borrado',
              '¡El usuario ha sido eliminado con éxito!',
              'success'
            )
            document.querySelector('.fila').setAttribute("class", "d-none")
          }
        })
    },
    editar: (event)=>{
        let id = event.target.dataset.id
        Swal.fire(`Estás editando el usuario con id: ${id}`)
    }
}