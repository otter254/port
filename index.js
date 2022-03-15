
var rect = $('#container')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#container").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".slide", -100);
    parallaxIt("img", -30);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement * 6,
    y: (mouse.y - rect.height / 2) / rect.height * movement * 6
  });
}

$(window).on('resize scroll', function(){
  rect = $('#container')[0].getBoundingClientRect();
})


// ホバーエフェクト 1
var hoverDistort = new hoverEffect({
  parent: document.querySelector('.wrapper'),
  intensity: 0.5,
  image1: './files/topimages/mountain.png',
  image2: './files/topimages/mountain_after.png',
  displacementImage: '4.png'
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.hero-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

$(document).ready(function() {

$('.wrapper').hover(         
function () {
anime.timeline({loop: false})
.add({
targets: '.hero-title .letter',
translateX: [80,0],
translateZ: 0,
opacity: [0,1],
easing: "easeOutExpo",
duration: 1400,
delay: (el, i) => 100 + 40 * i
})
},

function () {
anime.timeline({loop: false})
.add({
targets: '.hero-title .letter',
translateX: [0,-80],
opacity: [1,0],
easing: "easeInExpo",
duration: 800,
delay: (el, i) => 40 * i
});         
}
);
  
});

// ホバーエフェクト 2
var hoverDistort = new hoverEffect({
  parent: document.querySelector('.wrappertwo'),
  intensity: 0.5,
  image1: './files/topimages/img02.png',
  image2: './files/topimages/img02.png',
  displacementImage: '4.png'
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.hero-titletwo');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

$(document).ready(function() {

$('.wrappertwo').hover(         
function () {
anime.timeline({loop: false})
.add({
targets: '.hero-titletwo .letter',
translateX: [80,0],
translateZ: 0,
opacity: [0,1],
easing: "easeOutExpo",
duration: 1400,
delay: (el, i) => 100 + 40 * i
})
},

function () {
anime.timeline({loop: false})
.add({
targets: '.hero-titletwo .letter',
translateX: [0,-80],
opacity: [1,0],
easing: "easeInExpo",
duration: 800,
delay: (el, i) => 40 * i
});         
}
);
  
});

// ホバーエフェクト 3
var hoverDistort = new hoverEffect({
  parent: document.querySelector('.wrapperthree'),
  intensity: 0.5,
  image1: './files/topimages/img03.png',
  image2: './files/topimages/img03_after.png',
  displacementImage: '4.png'
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.hero-titlethree');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

$(document).ready(function() {

$('.wrapperthree').hover(         
function () {
anime.timeline({loop: false})
.add({
targets: '.hero-titlethree .letter',
translateX: [80,0],
translateZ: 0,
opacity: [0,1],
easing: "easeOutExpo",
duration: 1400,
delay: (el, i) => 100 + 40 * i
})
},

function () {
anime.timeline({loop: false})
.add({
targets: '.hero-titlethree .letter',
translateX: [0,-80],
opacity: [1,0],
easing: "easeInExpo",
duration: 800,
delay: (el, i) => 40 * i
});         
}
);
  
});

// ホバーエフェクト 4
var hoverDistort = new hoverEffect({
  parent: document.querySelector('.wrapperfour'),
  intensity: 0.5,
  image1: './files/topimages/img03.png',
  image2: './files/topimages/img03_after.png',
  displacementImage: '4.png'
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.hero-titlefour');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

$(document).ready(function() {

$('.wrapperfour').hover(         
function () {
anime.timeline({loop: false})
.add({
targets: '.hero-titlefour .letter',
translateX: [80,0],
translateZ: 0,
opacity: [0,1],
easing: "easeOutExpo",
duration: 1400,
delay: (el, i) => 100 + 40 * i
})
},

function () {
anime.timeline({loop: false})
.add({
targets: '.hero-titlefour .letter',
translateX: [0,-80],
opacity: [1,0],
easing: "easeInExpo",
duration: 800,
delay: (el, i) => 40 * i
});         
}
);
  
});



//カーソル
let cursorR = 4;  //カーソルの半径
const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//リンクにホバー時はクラスをつける
// const linkElem = document.querySelectorAll('a');
// for (let i = 0; i < linkElem.length; i++) {
//     linkElem[i].addEventListener('mouseover', function (e) {
//         cursor.classList.add('hov_');
//     });
//     linkElem[i].addEventListener('mouseout', function (e) {
//         cursor.classList.remove('hov_');      
//     });
// }


const menuBtn =document.querySelector(".menuBtn");
const exitBtn =document.querySelector(".exit");

$('.menuBtn').on('click', function(){
  TweenMax.to(".menu", 1, {opacity: 1, top:0 , zIndex:1})
}),

$('.exit').on('click', function(){
  TweenMax.to(".menu", 1, {opacity: 0, top:-40 , zIndex:0})
})
