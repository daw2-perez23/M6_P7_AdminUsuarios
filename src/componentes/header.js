import { router } from "./router";

export const header = {
    //Plantilla del nav con Bootstrap5
    template: `
        <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" id="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="admin">Admin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="about">About</a>
            </li>
        </ul>`
        ,

    script: ()=>{
        document.querySelector('#home').addEventListener('click', ()=>{
          router.home()
        });

        document.querySelector('#admin').addEventListener('click', () =>{
          router.admin()
        });

        document.querySelector('#about').addEventListener('click', () =>{
          router.about()
        });
    }


}

