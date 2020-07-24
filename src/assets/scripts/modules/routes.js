// import Navigo from "navigo";
import {icons} from "./icons";

let root = 'http://localhost:3000/';
let useHash = true; // Defaults to: false
let hash = '#'; // Defaults to: '#'
let router = new Navigo(root, useHash, hash);
export function routes() {
  router.on(function () {
    alert('hello router!');
  })
  router.on('/:slug', (params) => {
    // let slug = params.slug
    let icon = icons.find(value => value.slug === params.slug)
    let $icon = $('.icon--' + icon.slug)
    let iconPosTop = ((($icon.css('top').replace('px', ''))* -1) + 'px')
    let iconPosLeft = ((($icon.css('left').replace('px', ''))* -.75)  + 'px')
    let $mapContainer = $('.map-container');
    $mapContainer.animate({
      top: iconPosTop,
      left: iconPosLeft
    }, 1000, function() {})
    console.log('.icon--' + icon.slug)
    console.log(`Icon: ${$icon.css('top')} ${$icon.css('left')}`)
    console.log(`Icon: ${iconPosTop} ${iconPosLeft}`)

    console.log(`Map:  ${$mapContainer.css('top')} ${$mapContainer.css('left')}`)
  })
  // router.notFound(()=> {
  //   alert('404 not found')
  // })
  router.resolve();
}
// export function routes() {
//   let root = null
//   let useHash = true // Defaults to: false
//   let hash = '#!' // Defaults to: '#'
//   let route: Navigo = new Navigo(root, useHash, hash);;
//   alert('routes')
// }