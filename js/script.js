let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

lightGallery(document.querySelector('.gallery .gallery-container'));

// Păstrăm preferința utilizatorului
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Salvăm preferința în localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});


const swiper = new Swiper(".mySwiper", {
   loop: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Păstrăm preferința utilizatorului
if (localStorage.getItem('dark-mode') === 'enabled') {
 body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
 body.classList.toggle('dark-mode');

 // Salvăm preferința în localStorage
 if (body.classList.contains('dark-mode')) {
   localStorage.setItem('dark-mode', 'enabled');
 } else {
   localStorage.setItem('dark-mode', 'disabled');
 }
});
