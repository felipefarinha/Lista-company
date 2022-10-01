import '../css/style.css'
import { box, boxBig, creatBtnHeader } from "./renderFn.js";
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

    elementBtnHeaders: document.querySelector('.buttons-header').innerHTML = creatBtnHeader('Novo Compras', 'Novo Tarefas'),

    elementBtnHeaders: document.querySelector('.select-menu').innerHTML = `
          <ul>
            <li><h2>Compras</h2></li>
            <li><h2>Tarefas</h2></li>
            <li><h2>Tudo</h2></li>
          </ul>
    `,

    elementBoxTarefas: document.querySelector('.wrap-box').innerHTML = `${box(listaTarefas).join('')}`,

    elementBoxCompras: document.querySelector('.wrap-big-box').innerHTML = `${boxBig(listaCompras).join('')}`
  }

  document.getElementById('menu-toggle').addEventListener("click", iconMenuFn())

  return result
}
renderPageOne()

function renderPageTwo() {

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
// renderPageTwo()