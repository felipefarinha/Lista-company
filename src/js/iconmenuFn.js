export function iconMenuFn() {
  const toggle = document.getElementById('menu-toggle');

  toggle.onclick = () => {
    const toggleMid = document.getElementById('menu-toggleMid');

    toggle.classList.toggle('active');
    toggleMid.classList.toggle('active');
  }
}