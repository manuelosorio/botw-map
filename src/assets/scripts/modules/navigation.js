import {icons} from "./icons";

export class Nav {
  $nav = document.getElementById('nav')
  createNav() {
    for (let icon of icons) {
      const slug = icon.slug;
      const name = icon.name;
      this.$nav.innerHTML += `<a href=\"/#/${slug}\">${name}</a>`
    }
  }
}