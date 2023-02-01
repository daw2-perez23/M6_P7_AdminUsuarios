import { about } from "../vistas/about.js";
import { admin } from "../vistas/admin.js";
import { home } from "../vistas/home.js";
import { adminUsuarios } from "./adminUsuarios.js";
import Swal from "sweetalert2";
import { registro } from "./registro.js";

export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template;
        home.script()
    },
    admin: ()=>{
        document.querySelector('main').innerHTML = admin.template
        adminUsuarios.generaTabla()
        admin.eventos()
        registro.insertaTabla()
        registro.eventos()
        registro.avatar()
    },
    about: ()=>{
        document.querySelector('main').innerHTML = about.template
        about.script()
    }
}