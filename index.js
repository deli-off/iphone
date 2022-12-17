let blue = document.querySelector('.blue');
let purple = document.querySelector('.purple');
let midnight = document.querySelector('.midnight');
let starlight = document.querySelector('.starlight');
let red = document.querySelector('.red');
let img = document.querySelector('.scroll-section__inner-img');

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

// 2 способ

// let allBtns = document.querySelectorAll('button');
// let img = document.querySelector('.scroll-section__inner-img');


// allBtns.forEach(btn => {
//     btn.onclick = () => {
//         if (btn.classList === 'blue') {
//             img.style.backgroundImage = "url('./img/blue-iphone.jpg')"
//         } else if (btn.classList === 'purple') {
//             img.style.backgroundImage = "url('./img/purple-iphone.jpg')"
//         } else if (btn.classList === 'midnight') {
//             img.style.backgroundImage = "url('./img/midknihgt-iphone.jpg')"
//         } else if (btn.classList === 'starlight') {
//             img.style.backgroundImage = "url('./img/starlight-iphone.jpg')"
//         } else if (btn.classList === 'red') {
//             img.style.backgroundImage = "url('./img/red-iphone.jpg')"
//         }
//     }
// })


















