import { v4 as uuidv4 } from 'uuid';

export const registro = {

    template: 
    `
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
      <label for="password" class="form-label">Contraseña: </label>
      <input type="password" class="form-control" id="password">
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
  </form> 
    `,
    script: () => {
        
    }
}