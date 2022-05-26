const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})


const products = [
    { id: 1, description: "alliance Luxe", price: 1200, img: 'ressources/bague1.jpg'},
    { id: 2, description: 'collier', price: 200, img: 'ressources/colier1.jpg'},
    { id: 3, description: 'alliance Luxe', price: 5000, img: 'ressources/bague2.jpg'},
    { id: 4, description: 'costume', price: 8000, img: 'ressources/costume1.jpg'},
    { id: 5, description: 'costume Hommes', price: 3000, img: 'ressources/costume2.jpg'},
    { id: 6, description: 'couronne', price: 6500, img: 'ressources/couronne1.jpg'},
    { id: 7, description: 'fleur', price: 2500, img: 'ressources/fleur1.jpg'},
    { id: 8, description: 'robe', price: 2800, img: 'ressources/robe1.jpg'},
    { id: 9, description: 'robe', price: 4000, img: 'ressources/robe2.jpg'},
    { id: 10, description: 'robe', price: 2900, img: 'ressources/robe3.jpg'},
    { id: 11, description: 'robe', price: 8700, img: 'ressources/robe4.jpg'},
    { id: 12, description: 'robe', price: 6000, img: 'ressources/robe5.jpg'},
  ];
  
  // set little red dot above icons nav
  window.addEventListener("load", () => {
    let checkbox = document.getElementsByTagName('input'); 
    let notif = document.getElementById('nav-notif');
  
    // check if at least one of the checkboxes on the DOM is checked
    const checkboxCheck = () => { 
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          return true;
        }
      }
      return false;
    }
  
    // set red dot
    const setNotif = () => {
      if (checkboxCheck()){
        // console.log('true');
        notif.style.visibility = 'visible';
        notif.style.opacity = '1';
      } else {
        // console.log('false');
        notif.style.visibility = 'hidden';
        notif.style.opacity = '0';
      }
    }
    
    // check once if red dot is needed
    setNotif();
  
    // watch any change
    document.addEventListener('click', setNotif);
  
  });