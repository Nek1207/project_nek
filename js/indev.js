const duration = document.querySelectorAll('.duration');
const repeatings = document.querySelectorAll('.repeatings');
const link = document.querySelectorAll('.link');


const whiteIcon = document.querySelectorAll('.whiteicon, .whiteIcon, .lightIcon, .lighticon');
const darkIcon = document.querySelectorAll('.darkicon, .darkIcon');
const OLEDIcon = document.querySelectorAll('.OLEDIcon, .OLEDicon, .oledicon');
const youtubeLink = document.querySelectorAll('.youtube');
const yandexMusicLink = document.querySelectorAll('.yandexMusic');
const bandcampLink = document.querySelectorAll('.bandcampLink');
const vkLink = document.querySelectorAll('.vkLink');


const levels = document.querySelector('levels');
const logotype = document.getElementById('logotype');
const prjctnkLogotypeTextless = document.getElementById('prjctnkLogotypeTextless');
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
  const label = labels[index];
  
  localStorage.setItem('theme', theme);
  html.setAttribute('data-theme', theme);
  themeToggle.innerHTML = `<div id="colorMode" class="${theme}"></div> ${label}`;
  // themeToggle.textContent = `${labels[index]}`;

  if (theme === "light") {
    console.log('image light');
    logotype.innerHTML = `<img src="./images/logo_alt.svg">`;
    prjctnkLogotypeTextless.innerHTML = `<img src="./images/logo_alt.svg">`;
    
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
    logotype.innerHTML = `<img src="./images/logo.svg">`;
    prjctnkLogotypeTextless.innerHTML = `<img src="./images/logo.svg">`;

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
    logotype.innerHTML = `<img src="./images/logo.svg">`;
    prjctnkLogotypeTextless.innerHTML = `<img src="./images/logo.svg">`;

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


