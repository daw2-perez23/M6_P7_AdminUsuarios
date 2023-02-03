import Swal from "sweetalert2";
import { usuarios } from "./usuarios.js";
import { editarPerfil } from './editarPerfil.js'
import multiavatar from '@multiavatar/multiavatar/esm'

export const adminUsuarios = {
    template: 
    `
        <div class="modal" tabindex="-1" id="myModal">
          <div class="modal-dialog modal-dialog-centered">
           <div class="modal-content" id="txtModal">
                <!-- Aquí puedes agregar el contenido de tu modal -->
            </div>
          </div>
        </div>

    <div>
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
                <tr id="${user.id}" class="fila ${user.nick}">
                    <th scope="row">${user.id}</th>
                    <td>${user.nick}</td>
                    <td>${user.email}</td>
                    <td>${user.pass}</td>
                    <td>
                        <button data-id="${user.id}" data-nick="${user.nick}" data-email="${user.email}" data-pass="${user.pass}" type="button" class="btn btn-primary me-2 editar" data-bs-toggle="modal" data-bs-target="#myModal">Editar</button> 
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
        let viewId = id.substr(0, 2);
        let nick = event.target.dataset.nick
        let email = event.target.dataset.email        
        let pass = event.target.dataset.pass
        

        document.querySelector('#txtModal').innerHTML = editarPerfil.template
        document.querySelector('#divAvatar').innerHTML = multiavatar(nick)

        document.querySelector('#editarNick').setAttribute("value", nick)
        document.querySelector('#editarEmail').setAttribute("value", email)
        document.querySelector('#editarPass').setAttribute("value", pass)
       
        

        document.querySelector('#actualizar').addEventListener('click', (event) => {
            event.preventDefault()
            
            var newNick = document.querySelector('#editarNick').value
            var newEmail = document.querySelector('#editarEmail').value
            var newPass = document.querySelector('#editarPass').value

            document.querySelector('#divAvatar').innerHTML = multiavatar(newNick)

            const userEditado = `
                    <td class="fw-bold">${viewId}</td>
                    <td>${newNick}</td>
                    <td>${newEmail}</td>
                    <td>${newPass}</td>
                    <td>
                        <button data-id="${id}" data-nick="${newNick}" data-email="${newEmail}" data-pass="${newPass}" type="button" class="btn btn-primary me-2 editar" data-bs-toggle="modal" data-bs-target="#myModal">Editar</button> 
                        <button data-id="${id}" type="button" class="btn btn-danger borrar">Eliminar</button>
                    </td>
                `
            
            document.querySelector(`.${nick}`).innerHTML = userEditado

            const numUser = usuarios.usuarios.findIndex(usuario=>usuario.id == id)

            usuarios.usuarios[numUser].nick = newNick
            usuarios.usuarios[numUser].pass = newPass
            usuarios.usuarios[numUser].email = newEmail
            
            console.log(usuarios.usuarios);
        }) 


        
    }
}