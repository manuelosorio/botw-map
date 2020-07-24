export class Meta {
  // title LoZ: Breath of The Wild
  // meta(name="Author" content="Manuel Osorio")
  // meta(name="description" content="Interactive Map showing locations of important mostly important items")
  //
  // // Open Graph - Facebook, Google, LinkedIn
  // meta(property="og:type" content="Article")
  // meta(property="og:description" content="Interactive Map showing locations of important mostly important items")
  // meta(property="og:image" content="./images/thumb.png")
  // meta(property="og:url" content="#")
  // meta(property="og:site_name" content="LoZ: Breath of The Wild")
  // //end Open Graph
  //
  // //Twitter Meta Content
  // meta(name="twitter:title" content="LoZ: Breath of The Wild")
  // meta(name="twitter:description" content="Interactive Map showing locations of important mostly important items")
  // meta(name="twitter:image" content="./images/thumb.png")
  // meta(name="twitter:site" content="@MKDesignzManuel")
  // meta(name="twitter:creator" content="@MKDesignzManuel")

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
