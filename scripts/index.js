// furniture

const buttonFurniture = document.querySelectorAll(".furniture__item"); // Кнопки
const imagesF1 = document.querySelector(".furniture__images-f1"); //
const imagesF2 = document.querySelector(".furniture__images-f2"); //
const imagesF3 = document.querySelector(".furniture__images-f3"); //

buttonFurniture.forEach(function (el) {
  el.addEventListener("click", function () {
    buttonFurniture.forEach(function (ele) {
      ele.classList.remove("furniture__item_active");
    });
    if (el.classList.contains("furniture__item_active")) {
    } else {
      el.classList.add("furniture__item_active");
      console.log(el.id);
      if (el.id == "f1") {
        imagesF1.classList.add("furniture__images-f1_active");
        imagesF2.classList.remove("furniture__images-f2_active");
        imagesF3.classList.remove("furniture__images-f3_active");
      } else {
        if (el.id == "f2") {
          imagesF2.classList.add("furniture__images-f2_active");
          imagesF1.classList.remove("furniture__images-f1_active");
          imagesF3.classList.remove("furniture__images-f3_active");
        } else {
          if (el.id == "f3") {
            imagesF3.classList.add("furniture__images-f3_active");
            imagesF2.classList.remove("furniture__images-f2_active");
            imagesF1.classList.remove("furniture__images-f1_active");
          }
        }
      }
    }
  });
});
// Картинка gallery-grid
const popupImage = document.querySelector("#popup-img"); // Окно - "Картинка"
const buttonCloseImage = popupImage.querySelector("#popup-close-img"); // Кнопка - закрыть "Картинка"
const galleryItem = document.querySelectorAll(".gallery-grid__item");

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//кнопка закрыть - "Картинка"
buttonCloseImage.addEventListener("click", function () {
  closePopup(popupImage);
});

//Слушатель для открытия Картинка
galleryItem.forEach(function (el) {
  el.addEventListener("click", () => {
    popupImage.classList.add("popup_opened"); // функция открытия попапа
    console.log(el);
    const imgTitle = el.querySelector(".gallery-grid__address");
    const imgLink = el.querySelector(".gallery-grid__image");
    title = imgTitle.textContent;
    link = imgLink.src;
    const imgTitlePopup = popupImage.querySelector("#popup-img-title");
    const imgLinkPopup = popupImage.querySelector("#popup-image-link");
    imgTitlePopup.textContent = title;
    imgLinkPopup.src = link;
  });
});
// конец Картинка gallery-grid
