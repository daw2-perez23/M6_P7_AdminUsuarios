import { adminUsuarios } from './componentes/adminUsuarios'
import { header } from './componentes/header'
import './style.css'
import { admin } from './vistas/admin'

document.querySelector('header').innerHTML = header.template
header.script()



document.querySelector('body').innerHTML = admin.template
adminUsuarios.script()
admin.script()