import '../css/style.css'

document.querySelector('#app').innerHTML = `
<!-- <body>
    <div class="phone_2">
      <img src="/iphone.png">
      <div class="div_phone"></div>
    </div> -->

      <div class="div-phone">
        <img src="./assets/iphone.png">
        <div class="div_phone">
        </div>
      </div>
    <div class="phone">
      <div class="note"></div>
      <div class="task"></div>

    <div class="wrap-phone">

      <div class="wrap-header">
        <div class="menu-hamburger">
          
          <div id="menu-toggle">
          <div id="menu-toggleMid" class="menu-toggleMid"></div>
          </div>
        </div>

        <h2>Lista company</h2>

      </div> <!-- wrap-header -->

      <div class="buttons-header">
        <div class="button-new-buy">
          <h2>Novo Compras</h2>
        </div>
        <div class="button-new-task">
          <h2>Novo Tarefas</h2>
        </div>
      </div><!-- end buttons-header -->

      <div class="select-menu">
        <ul>
          <li><h2>Compras</h2></li>
          <li><h2>Tarefas</h2></li>
          <li><h2>Tudo</h2></li>
      </div> <!-- end select-menu -->
      
      <div class="flex-box">

        <div class="wrap-box">
          <div class="box">
            <p>Lista de tarefas</p>
            <p>21/02/2021</p>
          </div>
          <div class="box">
            <p>Lista de tarefas</p>
            <p>21/02/2021</p>
          </div>
          <div class="box">
            <p>Lista de tarefas</p>
            <p>21/02/2021</p>
          </div>
          <div class="box">
            <p>Lista de tarefas</p>
            <p>21/02/2021</p>
          </div>
          <div class="box">
            <p>Lista de tarefas para fazer segunda </p>
            <p>21/02/2021</p>
          </div>
        </div> <!-- end wrap-box -->
        
        <div class="wrap-big-box">

          <div class="box_big">
            <p>Lista de compras</p>
            <p>21/02/2021</p>
            <p>Qnt itens: 12</p>
            <p>Valor: 112,00</p>
          </div>
          <div class="box_big">
            <p>texto aqui</p>
          </div>
          <div class="box_big">
            <p>texto aqui</p>
          </div>

        </div> <!-- end wrap-big-box -->

      </div> <!-- end flex-box -->


    </div> <!-- wrap-phone -->
    </div> <!-- end phone -->

  <!--</div>  end div_phone -->
<!--</div>  end div-phone -->
`
const toggleMid = document.getElementById('menu-toggleMid');
const toggle = document.getElementById('menu-toggle');

toggle.onclick = () => {
  toggle.classList.toggle('active');
  toggleMid.classList.toggle('active');
}