import { bottomright, trees_container, carT, about} from "./query.js";
import solidCard from "./solidCard.js"
import woodCard from "./woodCard.js"
import sliderCard from "./sliderCard.js"
import aboutCard from "./aboutCard.js";



// fetch('../DB/allImages.json')
//     .then(resp => resp.json())
//     .then(data => {
//         data.images1.forEach(imag => {
//             bottomright.innerHTML += solidCard.render(imag)
//         })
        
//         data.images2.forEach(imag => {
//             trees_container.innerHTML += woodCard.render(imag)
//         })
        
//         data.images3.forEach(imag => {
//             carT.innerHTML += sliderCard.render(imag)
//         })

//         data.images4.forEach(imag => {
//             about.innerHTML += aboutCard.render(imag)
//         })
//     })
//     .then(initCarousel);

// fetch('../DB/images.json'')
//     .then(resp => resp.json())
//     .then(data => {
//         data.images1.forEach(imag => {
//             bottomright.innerHTML += solidCard.render(imag)
//         })



fetch('../DB/images.json')
.then(resp => resp.json())
.then(data => {
    data.forEach(imag => {
        bottomright.innerHTML += solidCard.render(imag)
    })
})       

fetch('../DB/images2.json')
    .then(resp => resp.json())
    .then(data1 => {
        data1.forEach(imag1 => {
            trees_container.innerHTML += woodCard.render(imag1)
        })
    })


fetch('../DB/images3.json')
    .then(resp => resp.json())
    .then(data2 => {
        data2.forEach(imag2 => {
            carT.innerHTML += sliderCard.render(imag2)
        })
    })

    fetch('../DB/images4.json')
    .then(resp => resp.json())
    .then(data4 => {
        data4.forEach(imag4 => {
            about.innerHTML += aboutCard.render(imag4)
        })
    }).then(initCarousel);

// Эвент на изменение dom в carT
// Если изменился значит появились картинки, занчит нужно инициальзировать карусель
// carT.addEventListener('DOMSubtreeModified', initCarousel, false);

let list = carousel.querySelector('.carT');
let width = $(carousel).innerWidth(); // ширина картинки
// let width = carousel.offsetWidth;
let count = 1; // видимое количество изображений
let currentPosition = 0;

window.addEventListener('resize', () => {
    width = $(carousel).innerWidth();
    // width = carousel.offsetWidth;
    list.style.transition = 'none';
    list.style.marginLeft = currentPosition * width + 'px';
});

function initCarousel() {
    /* конфигурация */

    let listElems = carousel.querySelectorAll('.car');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function () {
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0);
        currentPosition = position / width;
        list.style.transition = 'margin-left 500ms';
        list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function () {
        // сдвиг вправо
        position -= width * count;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -1 * (width * (listElems.length - count)));
        currentPosition = position / width;
        list.style.transition = 'margin-left 500ms';
        list.style.marginLeft = position + 'px';
    };
}