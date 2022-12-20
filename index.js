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

openBtn.onclick = () => {
    modalBg.style.display = 'block'
    modal.style.display = 'block'
}

closeBtn.onclick = () => {
    modalBg.style.display = 'none'
    modal.style.display = 'none'
}















