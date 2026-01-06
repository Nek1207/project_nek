const detailedList = document.getElementById('detailed');
const fastList = document.getElementById('fast');

const card = document.querySelectorAll('.card');
    
const range = document.getElementById('heightRange');
const heightValue = document.getElementById('heightValue');

card.forEach(element => {
    element.style.height = '200px';
});

// При изменении ползунка
range.addEventListener('input', (e) => {
  const height = e.target.value;
  
  card.forEach(element => {
    element.style.height = height + 'px';
  });
  // обновляем высоту карточки

  
  // показываем текущее значение
  heightValue.textContent = height;
});


const foundYear = document.querySelectorAll('.foundYear');
    
const foundYearClean = [];

function foundYearRefresh() {
    foundYearClean.length = 0;
    foundYear.forEach((element, index) => {
        if (card[index].style.display != 'none') { foundYearClean[index] = element.innerText.trim(); }
    });
    console.log(foundYearClean);
}

foundYearRefresh();


function setYear() {
 
    
    
    

    const year = document.querySelector('.year');
    console.log(year.value);

    if (year.value == "All") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }
    else if (year.value == "2025") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }
    else if (year.value == "2024") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }
    else if (year.value == "2023") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }
    else if (year.value == "2022") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }
    else if (year.value == "2021") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }
    else if (year.value == "2020") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }
    else if (year.value == "2019") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }
    else if (year.value == "2018") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    }  
    else if (year.value == "2017") {
    card.forEach((element, index) => {
        if (foundYearClean[index] == null) { element.style.display = 'block'; }
        if (foundYearClean[index] == "2026") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2025") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2024") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2023") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2022") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2021") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2020") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2019") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2018") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2017") { element.style.display = 'block'; }
    });
    foundYearRefresh();
    } else {
        console.log("fuck off!"); 
    }


}



const showHideTitles = document.getElementById('showHideTitles');

showHideTitles.addEventListener('click', () => {
  showHideTitles.classList.toggle('active');
  const isActive = showHideTitles.classList.contains('active');
  console.log(isActive);
  showHideTitles.textContent = isActive ? 'Show titles' : 'Hide titles';

  if (isActive) {
    fatalTitle.style.display = 'none';
    extremeTitle.style.display = 'none';
    atrociousTitle.style.display = 'none';
    insaneTitle.style.display = 'none';
    harsherTitle.style.display = 'none';
    harshTitle.style.display = 'none';
    mediumTitle.style.display = 'none';
    normalTitle.style.display = 'none';


  } else {
    fatalTitle.style.display = 'block';
    extremeTitle.style.display = 'block';
    atrociousTitle.style.display = 'block';
    insaneTitle.style.display = 'block';
    harsherTitle.style.display = 'block';
    harshTitle.style.display = 'block';
    mediumTitle.style.display = 'block';
    normalTitle.style.display = 'block';


  }
});