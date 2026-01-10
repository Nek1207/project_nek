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

const fresh = `<div class="fresh"><span class="freshTitle">fresh</span></div>`;

const trackName = document.querySelectorAll('.trackName');

  
const foundYear = document.querySelectorAll('.foundYear');

const trackNameTitles = document.querySelectorAll('.card__title'); 

    
let foundYearClean = [];

const year = document.querySelector('.year');
let yearInts = []; 

function foundYearRefresh() {
    foundYearClean.length = 0;
    foundYear.forEach((element, index) => {
        if (card[index].style.display != 'none') {
            foundYearClean[index] = element.innerText.trim();
        }
    });
    yearInts = foundYearClean.map(num => parseInt(num, 10));
    console.log(yearInts);
    foundYear.forEach((element, index) => {

        if (year.value < 2026) {
            if (yearInts[index] == 2026) {
                card[index].style.display = 'none';
            } else {
                card[index].style.display = 'flex';

            }
        }  else {
            if (yearInts[index] == 2026) {
                element.innerHTML += fresh;
                trackNameTitles[index].style.width = '85%';
            }
        }
        
    });
    
    // console.log(foundYearClean);
}


function setYear() {
    // foundYearRefresh();

    // console.log(year.value);

    if (year.value == "All") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    }
    else if (year.value == "2025") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    }
    else if (year.value == "2024") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    }
    else if (year.value == "2023") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    }
    else if (year.value == "2022") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    }
    else if (year.value == "2021") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    }
    else if (year.value == "2020") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    }
    else if (year.value == "2019") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    HideTitles();
    }
    else if (year.value == "2018") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    HideTitles();
    }  
    else if (year.value == "2017") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2016") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    HideTitles();
    }
    else if (year.value == "2014") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2017") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2016") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'block'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    HideTitles();
    }
    else if (year.value == "2010") {
    foundYearRefresh();
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
        if (foundYearClean[index] == "2017") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2016") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2015") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2014") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2013") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2012") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2011") { element.style.display = 'none'; }
        if (foundYearClean[index] == "2010") { element.style.display = 'block'; }
    });
    HideTitles();
    } else {
        console.log("fuck off!"); 
    }


}


const fatalTitle = document.getElementById('fatalTitle');
const extremeTitle = document.getElementById('extremeTitle');
const atrociousTitle = document.getElementById('atrociousTitle');
const insaneTitle = document.getElementById('insaneTitle');
const harsherTitle = document.getElementById('harsherTitle');
const harshTitle = document.getElementById('harshTitle');
const mediumTitle = document.getElementById('mediumTitle');
const normalTitle = document.getElementById('normalTitle');
const easyTitle = document.getElementById('easyTitle');
const showHideTitles = document.getElementById('showHideTitles');

showHideTitles.addEventListener('click', () => {
  showHideTitles.classList.toggle('active');
  const isActive = showHideTitles.classList.contains('active');
//   console.log(isActive);
  showHideTitles.textContent = isActive ? 'Show titles' : 'Hide titles';

  if (isActive) {
    HideTitles();
  } else {
    showTitles();
  }
});


function HideTitles() {
    fatalTitle.style.display = 'none';
    extremeTitle.style.display = 'none';
    atrociousTitle.style.display = 'none';
    insaneTitle.style.display = 'none';
    harsherTitle.style.display = 'none';
    harshTitle.style.display = 'none';
    mediumTitle.style.display = 'none';
    normalTitle.style.display = 'none';
    easyTitle.style.display = 'none';
}

function showTitles() {
    fatalTitle.style.display = 'block';
    extremeTitle.style.display = 'block';
    atrociousTitle.style.display = 'block';
    insaneTitle.style.display = 'block';
    harsherTitle.style.display = 'block';
    harshTitle.style.display = 'block';
    mediumTitle.style.display = 'block';
    normalTitle.style.display = 'block';
    easyTitle.style.display = 'block';
}




const authors = [];

document.querySelectorAll('.authorName').forEach((span, index) => {
  authors[index] = span.textContent.trim();
});

// console.log(authors);


function searchTracksByAuthor() {

    const searchInput = document.getElementById('searchInput');


    searchMenu.innerHTML = `<p>The next similar examples will appear here.</p>`;

    
    if (searchInput.value.length === 0) {
        console.log('lenght = 0');
    } else {
        card.forEach((element, index) => {
            if (authors[index] == searchInput.value) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';

            }
        });
    }
    HideTitles();

}