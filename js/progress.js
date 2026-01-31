const progress = document.querySelector('progress');
const progressValue = document.getElementById('progressValue');

progress.value = 0;
progress.max = 1000;


// Анимация загрузки
let value = 0;
let percent = 0;
const interval = setInterval(() => {
  progressValue.innerText = progress.value;
  progress.value = value;
  percent = (progress.value / progress.max) * 100;
  value += 1;
  if (value >= 679+2) clearInterval(interval);
}, 1);
