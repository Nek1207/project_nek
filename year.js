const detailedList = document.getElementById('detailed');
const fastList = document.getElementById('fast');

const card = document.querySelectorAll('.card');
    
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