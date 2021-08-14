// get element
let arrowBtn = $('.arrow')
let link = $('a[href="#"]:not(".arrow")')

// event binding
arrowBtn.on('click', function(e) {
  // send event object to the function
  scrollToFeatureSection(e)
})
link.on('click', function(e) {
  // send event object to the function
  scrollToTop(e)
})


// smooth scrolling
function scrollToTop(e) {
  // prevent default action of <a>
  e.preventDefault()
  // move to top
  $('html, body').stop().animate({scrollTop: 0}, 800)
}


function scrollToFeatureSection(e) {
  // prevent default action of <a>
  e.preventDefault()
  // get position of the feature section 
  let target = document.getElementById('feature').offsetTop
  // move to the position
  $('html, body').stop().animate({scrollTop: target}, 800)
}
