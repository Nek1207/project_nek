const difficultyTitle = {
    "fatal": `<h3 id="fatalTitle" class="fatal">fatal difficulty</h3>`,
    "extreme": `<h3 id="extremeTitle" class="extreme">extreme difficulty</h3>`,
    "atrocious": `<h3 id="atrociousTitle" class="atrocious">atrocious difficulty</h3>`,
    "insane": `<h3 id="insaneTitle" class="insane">insane difficulty</h3>`,
    "harsher": `<h3 id="harsherTitle" class="harsher">harsher difficulty</h3>`,
    "harsh": `<h3 id="harshTitle" class="harsh">harsh difficulty</h3>`,
    "medium": `<h3 id="mediumTitle" class="medium">medium difficulty</h3>`,
    "normal": `<h3 id="normalTitle" class="normal">normal difficulty</h3>`,
    "easy": `<h3 id="easyTitle" class="easy">easy difficulty</h3>`,
    "pacific": `<h3 id="pacificTitle" class="pacific">pacific difficulty</h3>`,
};


// const easyTitle = document.getElementById('easyTitle');
// const pacificTitle = document.getElementById('pacificTitle');




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
const prjctnkLogotype = document.getElementById('prjctnkLogotype');
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
    prjctnkLogotype.innerHTML = `<img src="./images/prjctnk-logo-alt.svg">`;
    
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
    prjctnkLogotype.innerHTML = `<img src="./images/prjctnk-logo.svg">`;

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
    prjctnkLogotype.innerHTML = `<img src="./images/prjctnk-logo.svg">`;

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



const scrollTopBtn = document.getElementById('scrollTop');
const SCROLL_THRESHOLD = 100; // показывать после 100px

// Показать/скрыть кнопку при скролле
window.addEventListener('scroll', () => {
  if (window.scrollY > SCROLL_THRESHOLD) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

// Плавный скролл наверх
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
