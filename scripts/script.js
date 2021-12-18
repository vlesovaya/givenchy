const menuButton = document.querySelector('.header__menu-button');
const menuPopup = document.querySelector('.popup_type_menu');

const closeButton = document.querySelector('.popup__close');
const popupMenuLinks = document.querySelectorAll('.popup__menu-link');


// Открытие модального окна

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup(menuPopup);
});

// Закрытие модального окна

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup(menuPopup)
})

for (let popupMenuLink of popupMenuLinks) {
  popupMenuLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.location = popupMenuLink.href;
    closePopup(menuPopup);
  })
}
