const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    
    // Тоггл бургер
    burgerBtn.addEventListener('click', () => {
    // console.log("TEST!!!!!!");
      burgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Закрытие по ссылкам
    document.querySelectorAll('.nav-link').forEach(link => {
    // console.log("TEST2!!!!!!");
      link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Закрытие по клику вне
    document.addEventListener('click', (e) => {
    // console.log("TEST3!!!!!!");
      if (!e.target.closest('.navigation') && navMenu.classList.contains('active')) {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });