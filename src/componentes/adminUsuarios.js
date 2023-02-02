import Swal from "sweetalert2";
import { usuarios } from "./usuarios.js";


export const adminUsuarios = {
    template: 
    `
    <div class="container-fluid">
        <table class="table table-striped table-hover border border-2 rounded ">
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contraseña</th>
                </tr>
              </thead> 
              <tbody id="tablaUsuarios" class="table-group-divider"">
              </tbody>  
          </table>
    </div>
    `,

    generaTabla: ()=>{
        let tablaHTML = ' '
        usuarios.usuarios.forEach(user => {
            tablaHTML += `
                <tr id="${user.id}" class="fila">
                    <th scope="row">${user.id}</th>
                    <td>${user.nick}</td>
                    <td>${user.email}</td>
                    <td>${user.pass}</td>
                    <td>
                        <button data-id="${user.id}" type="button" class="btn btn-primary me-2 editar">Editar</button> 
                        <button data-id="${user.id}" type="button" class="btn btn-danger borrar">Eliminar</button>
                    </td>
                </tr>
            `
        });
        
        document.querySelector('#vistaAdmin').innerHTML = adminUsuarios.template
        document.querySelector('#tablaUsuarios').innerHTML = tablaHTML 
        
    },
    eliminar: (event)=>{
        let id = event.target.dataset.id
        const columnaId = document.getElementById(id);
        console.log(columnaId);
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
              columnaId.classList.add('fila-oculta')
            }
        })
    },
    editar: (event)=>{
        let id = event.target.dataset.id
        Swal.fire(`Estás editando el usuario con id: ${id}`)
    }
}