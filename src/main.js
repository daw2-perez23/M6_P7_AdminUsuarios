import { adminUsuarios } from './componentes/adminUsuarios'
import { editarPerfil } from './componentes/editarPerfil'
import { header } from './componentes/header'
import { registro } from './componentes/registro'
import './style.css'
import { admin } from './vistas/admin'

document.querySelector('header').innerHTML = header.template
header.script() 


