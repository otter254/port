
// ハンバーガーメニュー
var controlit = $("svg");  
var menuToggle = new TimelineMax({paused:true, reversed:true});
menuToggle  
  .set('', {className:"-=closemenu"})
  .set('', {className:"+=openmenu"})
  // .to(' .top', .2, {y:'-9px', transformOrigin: '50% 50%'}, 'burg')
  .add('rotate')
  .to(' .top', .2, {y:'5'}, 'rotate')
  .to(' .bot', .2, {y:'-5'}, 'rotate')
  .to(' .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
  .to(' .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')

  .to(' .menu', .5, { bottom:0 }, )
  .to(' .nav-link', .7, { top:'20%', opacity: 1 }, ),
  

controlit.click(function () {
  menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
});

