
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

// const title = document.getElementById("title")
// console.log(title)
// title.classList.add("show")

// スクロールイベント
const targetElement = document.querySelectorAll(".galley-item");
console.log(window.innerHeight)
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i]
    .getBoundingClientRect().top + targetElement[i].clientHeight * .6
    // if (i == 1) {
    //   console.log(getElementDistance)
    // }
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show")
    }
  }
})

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".galley-item");

window.onload = ()=>{
  filterItem.onclick = (selectedItem)=>{
    if(selectedItem.target.classList.contains("item")){
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image)=>{
        let filterImages = image.getAttribute("data-name");
        if((filterImages == filterName) || filterName == "all"){
          image.classList.remove("hide");
          image.classList.add("itemshow");
        }else {
          image.classList.add("hide");
          image.classList.remove("itemshow");
        }
      });
    }
  }
}