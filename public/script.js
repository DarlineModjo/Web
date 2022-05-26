// data
const products = [
    { id: 1, description: "Quarz Luxe", price: 12, img: 'resources/quarz-luxe.JPG'},
    { id: 2, description: 'Curren Business', price: 20, img: 'resources/curren-business.JPG'},
    { id: 3, description: 'Curren Sport', price: 5, img: 'resources/curren-sport.JPG'},
    { id: 4, description: 'Jaragar Racing', price: 8, img: 'resources/jaragar-racing.JPG'},
    { id: 5, description: 'Liges Hommes', price: 3, img: 'resources/liges-hommes.JPG'},
    { id: 6, description: 'Maserati Mechanical', price: 65, img: 'resources/maserati-mechanical.JPG'},
    { id: 7, description: 'Montre Mecanique', price: 25, img: 'resources/montre-mecanique.JPG'},
    { id: 8, description: 'Brand Designer', price: 28, img: 'resources/brand-designer.JPG'},
    { id: 9, description: 'Relogio Masculino', price: 4, img: 'resources/relogio-masculino.JPG'},
    { id: 10, description: 'Tissot Multifunction', price: 29, img: 'resources/tissot-multifunction.JPG'},
    { id: 11, description: 'Hip Hop Gold', price: 87, img: 'resources/hiphop-gold.JPG'},
    { id: 12, description: 'Mesh Genova', price: 6, img: 'resources/mesh-genova.JPG'},
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
  
  