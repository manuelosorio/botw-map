// import Navigo from "navigo";
import {findIcon} from "./icons";
import {DataBox} from "./databox";
import {Meta} from "./meta"

let root = 'null';
let useHash = true; // Defaults to: false
let hash = '#'; // Defaults to: '#'
let router = new Navigo(root, useHash, hash);
export function routes() {
  let title= "LoZ: Breath of The Wild",
    description= "Interactive Map showing locations of important mostly important items",
    slug="https://botw.manuelosorio.me/#/"
  router.on(function () {
    $('.map-container').css({
      'top': '-1686px',
      'left': '-800px'
    })
    title= "LoZ: Breath of The Wild";
      description= "Interactive Map showing locations of important mostly important items";
      slug="https://botw.manuelosorio.me/#/";
    let meta = new Meta(title, description, slug);
    meta.browser();
    meta.openGraph();
    meta.twitter()
  })

    /*
      remove fbclid script is from:
      https://www.michalspacek.com/using-javascript-to-modify-urls-and-hide-fbclid
     */
    let param = 'fbclid';
    if (location.search.indexOf(param + '=') !== -1) {
      let replace = '';
      try {
        let url = new URL(location);
        url.searchParams.delete(param);
        replace = url.href;
      } catch (ex) {
        let regExp = new RegExp('[?&]' + param + '=.*$');
        replace = location.search.replace(regExp, '');
        replace = location.pathname + replace + location.hash;
      }
      history.replaceState(null, '', replace);
    } else if (!(window.location.href.indexOf('/#/')>1)) {
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

    title += `: ${icon.name}`;
    description = icon.description.slice(0, 120).concat('...');
    slug += icon.slug;
    let meta = new Meta(title, description, slug);
    meta.browser();
    meta.openGraph();
    meta.twitter();

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
    router.navigate(`/${currentIcon.slug}`);
  });
}
