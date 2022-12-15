let blue_btn = document.querySelector('.blue')
let purple_btn = document.querySelector('.purple')
let midnight_btn = document.querySelector('.starlight')
let red_btn = document.querySelector('.red')
let img = document.querySelector('.scroll-img')

purple_btn.onclick = () => {
    if (purple_btn.classList.contains('purple')) {
        img.classList.remove('blue')
        img.classList.add('purple__img')
    } else {
        img.classList.add('.purple__img')
    }
}

















