let currentSlide = 0;
const totalCards = 12;
const visibleCards = 4;
const maxSlide = totalCards - visibleCards;

function slide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxSlide) currentSlide = maxSlide;

  const sliderTrack = document.getElementById('sliderTrack');
  const slideWidth = sliderTrack.offsetWidth / visibleCards;
  sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}



// burguer


const burguer = document.querySelector('.burguer');
const navigation = document.querySelector('header nav');
const profil = document.querySelector('.profil');


burguer.addEventListener('click', () => {
  
  navigation.classList.toggle('active');
  profil.classList.toggle('active');


});