// for header toggle

let toogle = document.querySelector('.toogle')
let toogle_hidden = document.querySelector('.toogle-menu-hidden')
let overlay = document.querySelector('.overlay')

toogle.addEventListener('click', () => {
    toogle_hidden.classList.toggle('open')
    overlay.classList.toggle('overlay-show')

})
function myFunction(x) {
    x.classList.toggle("change");
}

//   To make header fixed to the top
let siteHeader = document.querySelector('#site-header')
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        document.querySelector('#site-header').classList.add('white')

    }
    else {
        document.querySelector('#site-header').classList.remove('white')
    }
}
)