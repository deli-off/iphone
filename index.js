// const iphonesColors = {
//     blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-storage-select-202209-6-7inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660691793956",
//     purple: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027938735",
//     midnight: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027925267",
//     starlight: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027935971"
// }

// let applesBtn = document.querySelectorAll('button[data-apple]')
// let img = document.querySelector('.scroll-section__inner-img')

// applesBtn.forEach(btn => {
//     btn.onclick = () => {
//         let key = btn.innerHTML
//         img.style.backgroundImage = `url(${iphonesColors[key]})`
//     }
// })

let blue = document.querySelector('.blue')
let purple = document.querySelector('.purple')
let midnight = document.querySelector('.midnight')
let starlight = document.querySelector('.starlight')
let red = document.querySelector('.red')
let img = document.querySelector('.scroll-section__inner-img')

blue.onclick = () => {
    img.style.backgroundImage = "url('./img/blue-iphone.jpg')"
}
purple.onclick = () => {
    img.style.backgroundImage = "url('./img/purple-iphone.jpg')"
}
midnight.onclick = () => {
    img.style.backgroundImage = "url('./img/midknight-iphone.jpg')"
}
starlight.onclick = () => {
    img.style.backgroundImage = "url('./img/starlight-iphone.jpg')"
}
red.onclick = () => {
    img.style.backgroundImage = "url('./img/red-iphone.jpg')"
}



let openBtn = document.querySelector('.p11')
let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modal-bg')
let closeBtn = document.querySelector('.close-btn')

function openClose(arr, func) {
    arr.onclick = () => {
        func()
    }
}

openClose(openBtn, openModal)
openClose(closeBtn, closeModal)

function openModal() {
    modal.style.display = "block"
    modalBg.style.display = "block"
    setTimeout(() => {
        modal.style.opacity = 1
        modalBg.style.opacity = 1
        modal.style.scale = 1
    }, 200)
}

function closeModal() {
    modal.style.opacity = 0
    modalBg.style.opacity = 0
    modal.style.scale = .1
    setTimeout(() => {
        modal.style.display = "none"
        modalBg.style.display = "none"
    }, 200)
}

let items = document.querySelectorAll('.box11')

items.forEach(item => {
    item.onclick = () => {
        items.forEach(el => el.classList.remove('active'))

        item.classList.add('active')
    }
})















