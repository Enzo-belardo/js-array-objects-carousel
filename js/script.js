const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];


const imageCaro = document.querySelector('div.carousel-image');
let indexImage = 0;


images.forEach((element, index) => {
   imageCaro.innerHTML += 
   `<div class="my_carousel-item">
      <img src = " ${element.image}" alt=" image ${index}"> 
      <h3>${element.title}</h3>
      <p>${element.text}</p>
   </div>` 
   
});

document.getElementsByClassName('my_carousel-item')[indexImage].classList.add('active')

//eventi
const buttonNext = document.querySelector('div.button.next');  

buttonNext.addEventListener("click", function(){
   changeSlide(indexImage++);
});

const buttonPrevius = document.querySelector('div.button.previous');

buttonPrevius.addEventListener("click", function(){  
   changeSlide(indexImage--)
  
});


//funzione
function changeSlide(elementToShow){
  document.querySelector('div.my_carousel-item.active').classList.remove('active');
  document.getElementsByClassName('my_carousel-item')[elementToShow].classList.add('active');

  return elementToShow;
}
