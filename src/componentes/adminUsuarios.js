import { usuarios } from "./usuarios.js";


export const adminUsuarios = {
    template: 
    `
    <div class="d-flex justify-content-center">
        <table class="table table-striped table-hover" style="width: 900px; height: 200px;">
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

    script: ()=>{

        let tablaHTML = ' '

        usuarios.usuarios.forEach(user => {
            tablaHTML += `
                <tr class="fila">
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

        document.querySelector('#tablaUsuarios').innerHTML = tablaHTML 
        
    }
}