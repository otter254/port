// スクロールイベント
const targetElement = document.querySelectorAll(".js-anim");
console.log(window.innerHeight)
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i]
    .getBoundingClientRect().top + targetElement[i].clientHeight * .6
    // if (i == 1) {
    //   console.log(getElementDistance)
    // }
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("textanim")
    }
  }
})

// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.textanim');
for (let index = 0; index < textWrapper.length; index += 1) {
  const element = textWrapper[index];
  element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false})
  .add({
    targets: '.textanim .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  })
}

  // .add({
  //   targets: '.ml12 .letter',
  //   translateX: [0,-30],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 1100,
  //   delay: (el, i) => 100 + 30 * i
  // });




// sp・タブレットでもない場合
if (!(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
  //カーソル
  let cursorR = 4;  //カーソルの半径
  const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

  //上記のdivタグをマウスに追従させる処理
  document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });

  //リンクにホバー時はクラスをつける
  const linkElem = document.querySelectorAll('a');
  for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener('mouseover', function (e) {
          cursor.classList.add('hov_');
      });
      linkElem[i].addEventListener('mouseout', function (e) {
          cursor.classList.remove('hov_');      
      });
  }
}

//ハンバーガーメニュー
const menu = document.getElementById('burger')
const logo = document.getElementById('logo')
menu.addEventListener('click' , function(event){
  logo.classList.toggle('active')
})

menu.addEventListener('mouseover' , function(event){
  cursor.classList.add('hov_');
})
menu.addEventListener('mouseout' , function(event){
  cursor.classList.remove('hov_');
})


