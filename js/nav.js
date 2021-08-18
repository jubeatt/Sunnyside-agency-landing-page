// get element
let html = document.getElementById('html')
let menuBtn = document.getElementById('menuBtn')
let menu = document.getElementById('menu')

// test
let hasJavaScript = true;


// detect javascript
if (hasJavaScript) {
  html.classList.add('js')
}



// event binding
menuBtn.addEventListener('click', toggleMenu, false)

// turn on / off the menu
function toggleMenu() {
  // if the menu is active
  if(menu.classList.contains('global-nav__menu--active')) {
    // set aria-expanded of the button to false 
    this.setAttribute('aria-expanded', 'false')
    // open the menu
    menu.classList.remove('global-nav__menu--active')
  } else {
    // set aria-expanded of the button to true
    this.setAttribute('aria-expanded', 'true')
    // close the menu
    menu.classList.add('global-nav__menu--active')
  }
}