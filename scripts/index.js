// furniture

const buttonFurniture = document.querySelectorAll('.furniture__item'); // Кнопки
const imagesF1 = document.querySelector('.furniture__images-f1'); //
const imagesF2 = document.querySelector('.furniture__images-f2'); //
const imagesF3 = document.querySelector('.furniture__images-f3'); //

buttonFurniture.forEach(function (el) {
  el.addEventListener('click', function () {
    buttonFurniture.forEach(function (ele) {
      ele.classList.remove('furniture__item_active');
    });
    if (el.classList.contains('furniture__item_active')) {
    } else {
      el.classList.add('furniture__item_active');
      console.log(el.id);
      if (el.id == 'f1') {
        imagesF1.classList.add('furniture__images-f1_active');
        imagesF2.classList.remove('furniture__images-f2_active');
        imagesF3.classList.remove('furniture__images-f3_active');
      } else {
        if (el.id == 'f2') {
          imagesF2.classList.add('furniture__images-f2_active');
          imagesF1.classList.remove('furniture__images-f1_active');
          imagesF3.classList.remove('furniture__images-f3_active');
        } else {
          if (el.id == 'f3') {
            imagesF3.classList.add('furniture__images-f3_active');
            imagesF2.classList.remove('furniture__images-f2_active');
            imagesF1.classList.remove('furniture__images-f1_active');
          }
        }
      }
    }
  });
});
