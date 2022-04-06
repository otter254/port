
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