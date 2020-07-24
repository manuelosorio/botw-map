import {iconHover, iconHoverEnd, iconsDiv} from './modules/icons';
import {routes} from "./modules/routes";
import {Nav} from "./modules/navigation";

$(window).ready(() => {
  routes();
  const nav = new Nav()
  nav.createNav();
  let $map = $('.map-container')
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
        } else if ((ui.position.top < y1 && ui.position.top > y2 &&

          ui.position.top !== y2) && (ui.position.top !== y1 || ui.position.top !== y2)) {
          console.log('can move y')
          return true;
        } else {
          // console.log('can\'t move y')
          return false;
        }
      }
  })
  iconsDiv();
  const $icon = $('.icon');
  $icon.on('mouseenter', (e) => {
    iconHover(e.currentTarget.className.replace('icon ', ''))
  });
  $icon.on('mouseleave', (e) => {
    iconHoverEnd(e.currentTarget.className.replace('icon ', ''))
  });
  $map.on('mousedown', () => {
    console.log($map.position());
  })

})
