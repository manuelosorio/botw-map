export class Meta {
  title = '';
  description = '';
  slug = '';
  constructor(title, description, slug) {
    this.title = title;
    this.description = description
    this.slug = slug
  }
  browser() {
    document.querySelector('title').innerHTML = this.title
    document.querySelector('meta[name="description"]').setAttribute('content', this.description)

  }
  openGraph() {
    document.querySelector('meta[property="og:site_name"]').setAttribute('content', this.title)
    document.querySelector('meta[property="og:description"]').setAttribute('content', this.description)
    document.querySelector('meta[property="og:url"]').setAttribute('content', this.slug)
  }
  twitter () {
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', this.title)
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', this.description)
  }
}
