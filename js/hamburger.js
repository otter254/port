
// ハンバーガーメニュー
var controlit = $("svg");  
var menuToggle = new TimelineMax({paused:true, reversed:true});
const header = document.getElementById("header")
const cursor = document.getElementById("cursor")

menuToggle  
  .set('', {className:"-=closemenu"})
  .set('', {className:"+=openmenu"})
  .add('rotate')
  .to(' .top', .2, {y:'5'}, 'rotate')
  .to(' .bot', .2, {y:'-5'}, 'rotate')
  .to(' .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
  .to(' .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')

  .to(' .bg_01', .3, { bottom:0 }, '-= .2')
  .to(' .bg_02', .3, { bottom:0 }, '-= .2')
  .to(' .bg_03', .3, { bottom:0 }, '-= .2')
  .to(' .bg_04', .3, { bottom:0 }, '-= .2')
  .to(' .bg_05', .3, { bottom:0 }, '-= .2')
  .to(' .menu', .3, { bottom:0 }, '-= .2')
  .to(' .nav-link01', .5, { top: 0, opacity: 1 }, '-= .3')
  .to(' .nav-link02', .5, { top: 0, opacity: 1 }, '-= .3')
  .to(' .nav-link03', .5, { top: 0, opacity: 1 }, '-= .3') ,
  

controlit.click(function () {
  menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
  header.classList.toggle("is_open")
  cursor.classList.toggle("is_open")
});

