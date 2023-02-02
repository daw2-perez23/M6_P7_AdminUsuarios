import { v4 as uuidv4 } from 'uuid';
import { adminUsuarios } from './adminUsuarios';
import { usuarios } from './usuarios';
import multiavatar from '@multiavatar/multiavatar/esm'

export const registro = {

    template: 
    `<div class="card">
      <div id="avatar" class="d-flex justify-content-sm"></div>
        <h5 class="card-header">Registro</h5>
          <div class="card-body">
            <form>
              <div class="mb-3">
                  <label for="nick" class="form-label">Nick: </label>
                  <input type="text" class="form-control" id="nick" aria-describedby="nickHelp">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email: </label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="pass" class="form-label">Contraseña: </label>
                <input type="password" class="form-control" id="pass">
              </div>
              <button type="submit" class="btn btn-primary" id="enviar">Enviar</button>
            </form>
          </div>    
    </div>    
    `,


  insertaTabla: () => {
      document.querySelector('#vistaRegistro').innerHTML = registro.template

  },

  creaUsuario: (event) => {
    event.preventDefault()
    const tr = document.createElement('tr', `id=${id}`)
    let id = uuidv4()
      const nuevoUsuario = `
          <td>${id}</td>
          <td>${document.querySelector('#nick').value}</td>
          <td>${document.querySelector('#email').value}</td>
          <td>${document.querySelector('#pass').value}</td>
          <td>
              <button data-id="${id}" type="button" class="btn btn-primary me-2 editar">Editar</button> 
              <button data-id="${id}" type="button" class="btn btn-danger borrar">Eliminar</button>
          </td>
      `
    tr.innerHTML = nuevoUsuario

    document.querySelector('#tablaUsuarios').append(tr)

  },

  eventos: () => {
    document.querySelector('#enviar').addEventListener("click",(event)=>{
      registro.creaUsuario(event)

    })

  },

  avatar: () => {
    document.querySelector('#nick').addEventListener("keydown",(event)=>{
      document.querySelector('#avatar').innerHTML = multiavatar(event.target.value)
    })
  }

}