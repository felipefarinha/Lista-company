import '../css/style.css'
import { box, boxBig } from "./renderFn.js";
import { listaCompras } from "../../backend/listaCompras.js";
import { listaTarefas } from "../../backend/listaTarefas.js";
import { iconMenuFn } from "./iconmenuFn.js";



function renderPageOne() {

  const result = {
    elementHeader: document.querySelector('.wrap-header').innerHTML = `
          <div class="menu-hamburger">
            <div id="menu-toggle">
            <div id="menu-toggleMid" class="menu-toggleMid"></div>
          </div>
        </div>
          <h2>Lista company</h2>
    `,

    elementBtnHeaders: document.querySelector('.buttons-header').innerHTML = `
         <div class="button-new-buy">
            <h2>Novo Compras</h2>
          </div>

          <div class="button-new-task">
            <h2>Novo Tarefas</h2>
          </div>
    `,

    elementBoxTarefas: document.querySelector('.wrap-box').innerHTML = `${box(listaTarefas).join('')}`,

    elementBoxCompras: document.querySelector('.wrap-big-box').innerHTML = `${boxBig(listaCompras).join('')}`
  }

  document.getElementById('menu-toggle').addEventListener("click", iconMenuFn())

  return result
}
renderPageOne()

