const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
// const closeBtn = document.getElementById("closeModalBtn");
const ModalBtnOK = document.getElementById("ModalBtnOK");

const isBasedSolely = document.getElementById('isBasedSolely');

isBasedSolely.addEventListener("click", () => {
  
  if (isBasedSolely.classList.contains('omg')) {
    isBasedSolely.classList.remove("omg");
    isBasedSolely.innerText = 'is based solely';
  } else {
    isBasedSolely.classList.add("omg");
    isBasedSolely.innerText = 'GO TO LISTEN THAT SHIT BABE';
  }


});


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
