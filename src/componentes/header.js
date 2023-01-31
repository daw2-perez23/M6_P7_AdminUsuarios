
export const header = {
    //Plantilla del nav con Bootstrap5
    template: `
        <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>`
        ,

    script: ()=>{
        console.log("HOLA FUNCIONO: header");
    }


}

