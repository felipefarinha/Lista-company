import '../css/style.css'
import { box, boxBig } from "./renderFn.js";
import { listaCompras } from "../../backend/listaCompras.js";
import { listaTarefas } from "../../backend/listaTarefas.js";
import { iconMenuFn } from "./iconmenuFn.js";


let result = {}

function renderPage() {

  result = {
    elementBoxTarefas: document.querySelector('#app').innerHTML = `${box(listaTarefas).join('')}`,

    elementBoxCompras: document.querySelector('#app2').innerHTML = `${boxBig(listaCompras).join('')}`

  }
  document.getElementById('menu-toggle').addEventListener("click", iconMenuFn());

  return result
}
renderPage()

