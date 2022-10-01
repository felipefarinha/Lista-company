export const creatBtnHeader = (strBtn1, strBtn2) =>
  `
    <div class="button-new-buy">
      <h2>${strBtn1}</h2>
    </div>

    <div class="button-new-task">
      <h2>${strBtn2}</h2>
    </div>
  `

export const box = (listaTarefas) => {
  let out = []
  out = listaTarefas.map(item => {
    return `
      <div class="box_big">
        <p>${item.nomeLista}</p>
        <p>${item.data}</p>
      </div>
        `
  })
  return out
}

export const boxBig = (listaCompras) => {
  let out = []
  out = listaCompras.map(item => {
    return `<div class="box_big">
            <p>${item.nomeLista}</p>
            <p>${item.data}</p>
            <p>Qnt. itens: ${item.qntItem}</p>
            <p>Valor: ${item.valor}</p>
          </div>
          
              `
  })
  return out
}