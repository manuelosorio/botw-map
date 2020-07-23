window.addEventListener('load', (event) => {
  routes();
  let $icons = $('.icon')
  let $map = $('.map-container')
  let startPos;
  // $icons.draggable();
  let x1 = '0'
  let x2 = '-2058'
  let y1 =  '0'
  let y2 = '-2239'
  $map.draggable({
    // containment: [x1, y1, x2, y2]
      drag: function (e, ui) {
        if (ui.position.left < x1 && ui.position.left > x2 && ui.position.left !== x2 && (ui.position.left !== x1 || ui.position.left !== x2)) {
          console.log('can move x')
          return true;
        } else {
          console.log('can\'t move x')
          return false
        }
        if (ui.position.top < y1 && ui.position.top > y2 && (ui.position.top !== y1 || ui.position.top !== y2)) {
          console.log('can move y')
          return true;
        } else {
          console.log('can\'t move y')
          return false;
        }
      }
  })


  $map.on('mousedown', () => {
    console.log($map.position());
  })
})

