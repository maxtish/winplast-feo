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
// Картинка gallery-grid
const popupImage = document.querySelector('#popup-img'); // Окно - "Картинка"
const buttonCloseImage = popupImage.querySelector('#popup-close-img'); // Кнопка - закрыть "Картинка"
const galleryItem = document.querySelectorAll('.gallery-grid__item');

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//кнопка закрыть - "Картинка"
buttonCloseImage.addEventListener('click', function () {
  closePopup(popupImage);
});

//Слушатель для открытия Картинка
galleryItem.forEach(function (el) {
  el.addEventListener('click', () => {
    popupImage.classList.add('popup_opened'); // функция открытия попапа
    console.log(el);
    const imgTitle = el.querySelector('.gallery-grid__address');
    const imgLink = el.querySelector('.gallery-grid__image');
    title = imgTitle.textContent;
    link = imgLink.src;
    const imgTitlePopup = popupImage.querySelector('#popup-img-title');
    const imgLinkPopup = popupImage.querySelector('#popup-image-link');
    imgTitlePopup.textContent = title;
    imgLinkPopup.src = link;
  });
});
// конец Картинка gallery-grid

// ОТПРАВКА PHPMailer

function send(event, php) {
  console.log('Отправка запроса');
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response); // херовый internet explorer 11
      console.log(json);

      // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
      if (json.result == 'success') {
        // Если сообщение отправлено
        alert('Сообщение отправлено');
      } else {
        // Если произошла ошибка
        alert('Ошибка. Сообщение не отправлено');
      }
      // Если не удалось связаться с php файлом
    } else {
      alert('Ошибка сервера. Номер: ' + req.status);
    }
  };

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () {
    alert('Ошибка отправки запроса');
  };
  req.send(new FormData(event.target));
}

//  конец ОТПРАВКА PHPMailer

//prof прасмотр профиля
const buttonProfItem = document.querySelectorAll('.prof__item'); // Кнопки
const ProfImagesF1 = document.querySelector('.prof__images-p1'); //
const ProfImagesF2 = document.querySelector('.prof__images-p2'); //
const ProfImagesF3 = document.querySelector('.prof__images-p3'); //
const ProfImagesF4 = document.querySelector('.prof__images-p4'); //
const ProfImagesF5 = document.querySelector('.prof__images-p5'); //
const ProfImagesF6 = document.querySelector('.prof__images-p6'); //

buttonProfItem.forEach(function (el) {
  el.addEventListener('click', function () {
    buttonProfItem.forEach(function (ele) {
      ele.classList.remove('prof__item_active');
    });
    if (el.classList.contains('prof__item_active')) {
    } else {
      el.classList.add('prof__item_active');
      console.log(el.id);
      if (el.id == 'p1') {
        ProfImagesF1.classList.add('prof__images_active');
        ProfImagesF2.classList.remove('prof__images_active');
        ProfImagesF3.classList.remove('prof__images_active');
        ProfImagesF4.classList.remove('prof__images_active');
        ProfImagesF5.classList.remove('prof__images_active');
        ProfImagesF6.classList.remove('prof__images_active');
      } else {
        if (el.id == 'p2') {
          ProfImagesF1.classList.remove('prof__images_active');
          ProfImagesF2.classList.add('prof__images_active');
          ProfImagesF3.classList.remove('prof__images_active');
          ProfImagesF4.classList.remove('prof__images_active');
          ProfImagesF5.classList.remove('prof__images_active');
          ProfImagesF6.classList.remove('prof__images_active');
        } else {
          if (el.id == 'p3') {
            ProfImagesF1.classList.remove('prof__images_active');
            ProfImagesF2.classList.remove('prof__images_active');
            ProfImagesF3.classList.add('prof__images_active');
            ProfImagesF4.classList.remove('prof__images_active');
            ProfImagesF5.classList.remove('prof__images_active');
            ProfImagesF6.classList.remove('prof__images_active');
          } else {
            if (el.id == 'p4') {
              ProfImagesF1.classList.remove('prof__images_active');
              ProfImagesF2.classList.remove('prof__images_active');
              ProfImagesF3.classList.remove('prof__images_active');
              ProfImagesF4.classList.add('prof__images_active');
              ProfImagesF5.classList.remove('prof__images_active');
              ProfImagesF6.classList.remove('prof__images_active');
            } else {
              if (el.id == 'p5') {
                ProfImagesF1.classList.remove('prof__images_active');
                ProfImagesF2.classList.remove('prof__images_active');
                ProfImagesF3.classList.remove('prof__images_active');
                ProfImagesF4.classList.remove('prof__images_active');
                ProfImagesF5.classList.add('prof__images_active');
                ProfImagesF6.classList.remove('prof__images_active');
              } else {
                if (el.id == 'p6') {
                  ProfImagesF1.classList.remove('prof__images_active');
                  ProfImagesF2.classList.remove('prof__images_active');
                  ProfImagesF3.classList.remove('prof__images_active');
                  ProfImagesF4.classList.remove('prof__images_active');
                  ProfImagesF5.classList.remove('prof__images_active');
                  ProfImagesF6.classList.add('prof__images_active');
                }
              }
            }
          }
        }
      }
    }
  });
});
//конец  prof прасмотр профиля
