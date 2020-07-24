// import Navigo from "navigo";
import {findIcon} from "./icons";
import {DataBox} from "./databox";

let root = 'null';
let useHash = true; // Defaults to: false
let hash = '#'; // Defaults to: '#'
let router = new Navigo(root, useHash, hash);
export function routes() {
  router.on(function () {
    $('.map-container').css({
      'top': '-1686px',
      'left': '-800px'
    })
  })
  if (!(window.location.href.indexOf('/#/')>1)) {
    console.log(false)
    router.navigate('/')
  }
  router.on('/:slug', (params) => {
    // let slug = params.slug
    let icon = findIcon(params.slug)
    let $icon = $('.icon--' + icon.slug)
    let iconPosTop = ((($icon.css('top').replace('px', ''))* -1) + 'px')
    let iconPosLeft = ((($icon.css('left').replace('px', ''))* -.75)  + 'px')
    let $mapContainer = $('.map-container');

    $mapContainer.animate({
      top: iconPosTop,
      left: iconPosLeft
    }, 1000, function() {})

    let db = new DataBox();
    db.createData(icon);

    const closeButton = document.querySelector('#close');
    $(closeButton).on('click', () => {
      db.close()
    });

  })
  // router.notFound(()=> {
  //   alert('404 not found')
  // })
  router.resolve();
  $('.icon').on('click', (e) => {
    const currentIcon = findIcon(e.currentTarget.className.replace('icon icon--', ''))
    console.log(currentIcon)
    router.navigate(`/#/${currentIcon.slug}`);
  })
}
