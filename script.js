const toggleMid = document.getElementById('menu-toggleMid');
const toggle = document.getElementById('menu-toggle');

toggle.onclick = () =>{
  toggle.classList.toggle('active');
  toggleMid.classList.toggle('active');
}