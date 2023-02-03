
export const editarPerfil = {
    template: 
    `
      <div class="modal-header">
        <h5 class="modal-title">Editar</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="d-flex justify-content-center mt-3" id="divAvatar" style="height: 200px; width: 200px; margin: 0 auto;"></div>
      <div class="modal-body">
        <form>
            <div class="mb-3">
              <label for="editarNick" class="form-label">Nick: </label>
              <input type="text" class="form-control" id="editarNick">
            </div>
            <div class="mb-3">
              <label for="editarEmail" class="form-label">Email: </label>
              <input type="editarEmail" class="form-control" id="editarEmail">
            </div>
            <div class="mb-3">
                <label for="editarPass" class="form-label">Contraseña: </label>
                <input type="editarPass" class="form-control" id="editarPass">
              </div>
            <button type="submit" class="btn btn-primary" id="actualizar" >Actualizar</button>
           <button type="button" class="btn btn-danger ms-1" data-bs-dismiss="modal" id="volver">Volver</button> 
          </form>
      </div> 
    `
    ,
}