// get element
let menuBtn = document.getElementById('menuBtn')
let menu = document.getElementById('menu')

// event binding
menuBtn.addEventListener('click', showMenu, false)

// show the menu  
function showMenu() {
  if (getComputedStyle(menu, null).display === 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}