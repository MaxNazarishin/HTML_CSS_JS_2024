document.addEventListener('click', function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.top-header__burger-button')) {
      const burgerContent = document.querySelector('.top-header__burger-content');
      burgerContent.classList.toggle('menu-open');
   }
});

document.addEventListener('DOMContentLoaded', function () {
   const buttons = document.querySelectorAll('.news-letter__button');

   if (buttons.length > 0) {
      buttons[0].classList.add('active');
   }

   buttons.forEach(button => {
      button.addEventListener('click', function () {
         buttons.forEach(btn => btn.classList.remove('active'));
         this.classList.add('active');
      });
   });
});

document.addEventListener('DOMContentLoaded', function () {
   const buttons = document.querySelectorAll('.best-sellers__button');

   if (buttons.length > 0) {
      buttons[0].classList.add('active');
   }

   buttons.forEach(button => {
      button.addEventListener('click', function () {
         buttons.forEach(btn => btn.classList.remove('active'));
         this.classList.add('active');
      });
   });
});