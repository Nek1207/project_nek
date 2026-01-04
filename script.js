const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
// const closeBtn = document.getElementById("closeModalBtn");
const ModalBtnOK = document.getElementById("ModalBtnOK");

const isBasedSolely = document.getElementById('isBasedSolely');

const duration = document.querySelectorAll('.duration');
const foundYear = document.querySelectorAll('.foundYear');
const repeatings = document.querySelectorAll('.repeatings');
const link = document.querySelectorAll('.link');


const whiteIcon = document.querySelectorAll('.whiteicon, .whiteIcon, .lightIcon, .lighticon');
const darkIcon = document.querySelectorAll('.darkicon, .darkIcon');
const OLEDIcon = document.querySelectorAll('.OLEDIcon, .OLEDicon, .oledicon');
const youtubeLink = document.querySelectorAll('.youtube');
const yandexMusicLink = document.querySelectorAll('.yandexMusic');
const bandcampLink = document.querySelectorAll('.bandcampLink');
const vkLink = document.querySelectorAll('.vkLink');

isBasedSolely.addEventListener("click", () => {
  
  if (isBasedSolely.classList.contains('omg')) {
    isBasedSolely.classList.remove("omg");
    isBasedSolely.innerText = 'is based solely';
  } else {
    isBasedSolely.classList.add("omg");
    isBasedSolely.innerText = 'GO TO LISTEN THAT SHIT BABE';
  }


});

const levels = document.querySelector('levels');
const logotype = document.getElementById('logotype');
const title = document.getElementById('title');
const themeToggle = document.getElementById('themeToggle');
// const colorMode = document.getElementById('colorMode');
const html = document.documentElement;

const themes = ['light', 'dark', 'oled'];
const labels = ['light', 'dark', 'OLED'];

function getCurrentThemeIndex() {
  return themes.indexOf(localStorage.getItem('theme') || 'light');
}

function setTheme(index) {
  const theme = themes[index];
  
  localStorage.setItem('theme', theme);
  html.setAttribute('data-theme', theme);
  themeToggle.innerHTML = `<div id="colorMode" class="${theme}"></div>`;
  // themeToggle.textContent = `${labels[index]}`;

  if (theme === "light") {
    console.log('image light');
    openBtn.innerHTML = `<img src="./images/information_alt.svg">`;
    logotype.innerHTML = `<img src="./images/logo_alt.svg">`;
    title.innerHTML = `<img src="./images/title_light.svg">`;
    
    whiteIcon.forEach(element => {
      element.style.display = 'none';
    }); 
    darkIcon.forEach(element => {
      element.style.display = 'block';
    });
    OLEDIcon.forEach(element => {
      element.style.display = 'none';
    }); 

  }
  if (theme === "dark") {
    console.log('image dark');
    openBtn.innerHTML = `<img src="./images/information.svg">`;
    logotype.innerHTML = `<img src="./images/logo.svg">`;
    title.innerHTML = `<img src="./images/title_dark.svg">`; 

    whiteIcon.forEach(element => {
      element.style.display = 'block';
    }); 
    darkIcon.forEach(element => {
      element.style.display = 'none';
    }); 
    OLEDIcon.forEach(element => {
      element.style.display = 'none';
    }); 
  }
  if (theme === "oled") {
    console.log('image oled');
    openBtn.innerHTML = `<img src="./images/information.svg">`;
    logotype.innerHTML = `<img src="./images/logo.svg">`;
    title.innerHTML = `<img src="./images/title_oled.svg">`;

    whiteIcon.forEach(element => {
      element.style.display = 'block';
    }); 
    darkIcon.forEach(element => {
      element.style.display = 'none';
    }); 
    OLEDIcon.forEach(element => {
      element.style.display = 'block';
    }); 
  }

}

themeToggle.addEventListener('click', () => {
  const currentIndex = getCurrentThemeIndex();
  const nextIndex = (currentIndex + 1) % 3;
  setTheme(nextIndex);
});

setTheme(getCurrentThemeIndex());



// открыть модалку
function openModal() {
  modal.classList.add("show");
  // фокус на кнопку закрытия (для удобства)
  // closeBtn.focus();
}

// закрыть модалку
function closeModal() {
  modal.classList.remove("show");
  // вернуть фокус на кнопку открытия
  openBtn.focus();
}

openBtn.addEventListener("click", openModal);
// closeBtn.addEventListener("click", closeModal);
ModalBtnOK.addEventListener("click", closeModal);

// клик по фону
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Esc для закрытия
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
  
});
