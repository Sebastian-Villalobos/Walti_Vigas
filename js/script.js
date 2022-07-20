let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   autoplay: {
    delay: 3000,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

function message(){
  var Name = document.getElementById('name');
  var email = document.getElementById('email');
  var msg = document.getElementById('msg');
  var number = document.getElementById('number');
  const success = document.getElementById('success');
  const failure = document.getElementById('failure');

  if(Name.value === '' || email.value === '' || msg.value === '' || number.value === ''){
      failure.style.display = 'block';
  }
  else{
      setTimeout(() => {
          Name.value = '';
          email.value = '';
          msg.value = '';
          number.value = '';
      }, 2000);

      success.style.display = 'block';
  }


  setTimeout(() => {
      failure.style.display = 'none';
      success.style.display = 'none';
  }, 4000);
  
}