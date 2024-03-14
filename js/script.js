let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');
let articleSections = document.querySelectorAll('.blog-article.short');

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
};

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
};

sansSerifFontButton.onclick = function () {
   document.body.classList.remove('serif');
   sansSerifFontButton.classList.add('active');
   serifFontButton.classList.remove('active');
};

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    };
};

let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');

let cardsList = document.querySelector('.rent-price');

gridViewButton.onclick = function () {
  cardsList.classList.remove('list');
  listViewButton.classList.remove('active');
  gridViewButton.classList.add('active');
};

listViewButton.onclick = function () {
  cardsList.classList.add('list');
  gridViewButton.classList.remove('active');
  listViewButton.classList.add('active');
};

