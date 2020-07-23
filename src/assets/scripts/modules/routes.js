// import Navigo from "navigo";
let root = null;
let useHash = true; // Defaults to: false
let hash = '#!'; // Defaults to: '#'
let router = new Navigo(root, useHash, hash);
export function routes() {
  router.on(function () {
    alert('hello router!');
  })
}
// export function routes() {
//   let root = null
//   let useHash = true // Defaults to: false
//   let hash = '#!' // Defaults to: '#'
//   let route: Navigo = new Navigo(root, useHash, hash);;
//   alert('routes')
// }