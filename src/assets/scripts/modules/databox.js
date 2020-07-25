export class DataBox {
  dataBox= document.querySelector('.data-box');
  constructor() {}
  createData(icon) {
    this.dataBox.innerHTML = `
      <h1 class="data-box--title">${icon.name}</h1>
      <p class="data-box--location">Location: <em>${icon.location}</em></p>
      <p>${icon.description}</p>
      <button id="close" class="btn">Close</button>
    `
    $(this.dataBox).animate({
      'opacity': '1',
      'transform': 'scale(1, 1)'
    }, 500, 'linear', () => {})
  }
  close() {
    $(this.dataBox).animate({
      'opacity': '0',
      'transform': 'scale(0, 0)'
    }, 500, 'linear', () => {
      this.dataBox.innerHTML = ''
    })
  }
}
