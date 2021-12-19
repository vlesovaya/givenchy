const menuButton = document.querySelector('.header__menu-button');
const menuPopup = document.querySelector('.popup_type_menu');

const closeButton = document.querySelector('.popup__close');
const popupMenuLinks = document.querySelectorAll('.popup__menu-link');

const photoElements = document.querySelectorAll('.cards__item');


// Popup opening

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup(menuPopup);
});

// Popup closing

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup(menuPopup);
})

for (let popupMenuLink of popupMenuLinks) {
  popupMenuLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.location = popupMenuLink.href;
    closePopup(menuPopup);
  });
}

// Random photo change

function changePhotos(photoElement1, photoElement2) {
  const str1 = photoElement1.src;
  photoElement1.src = photoElement2.src;
  photoElement2.src = str1;
}

function addPhotoChangingLogic() {
  setInterval(function () {
    const randomIndex1 = Math.floor(Math.random() * photoElements.length);
    const randomIndex2 = Math.floor(Math.random() * photoElements.length);

    const randomPhotoElement1 = photoElements[randomIndex1];
    const randomPhotoElement2 = photoElements[randomIndex2];

    randomPhotoElement1.classList.remove('fade-in');
    randomPhotoElement2.classList.remove('fade-in');

    randomPhotoElement1.classList.add('fade-out');
    randomPhotoElement2.classList.add('fade-out');

    setTimeout(function () {
      changePhotos(randomPhotoElement1, randomPhotoElement2);

      randomPhotoElement1.classList.remove('fade-out');
      randomPhotoElement2.classList.remove('fade-out');

      randomPhotoElement1.classList.add('fade-in');
      randomPhotoElement2.classList.add('fade-in');
    }, 300);

  }, 2000);
}

addPhotoChangingLogic();
