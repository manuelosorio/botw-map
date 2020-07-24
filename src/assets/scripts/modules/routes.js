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
    console.log(icon)
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