
export const editarPerfil = {
    template: 
    `
    <div class="modal-dialog modal-dialog-centered">
        <h5 class="modal-title">Editar: </h5>
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
            <button type="submit" class="btn btn-primary">Actualizar</button>
          </form>
    </div> 
    `


}