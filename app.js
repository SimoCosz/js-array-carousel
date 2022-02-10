const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// cerco dove andare a inserire l'immagine + titolo + descrizione nell'html
const slideWrapper = document.querySelector('.slide-wrapper')
// creo un ciclo per andare ad creare le varie varianti

for (let i = 0; i < items.length; i++ ){
  slideWrapper.innerHTML += `
  <div class="item">
    <img src="${items[i]}" alt="">
    <div class="description">
      <h6 class="titolo">${title[i]}</h6>
      <p class="paragrafo">${text[i]}</p>
    </div>
  </div>
  `
}
