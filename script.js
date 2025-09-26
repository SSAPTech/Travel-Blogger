document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  const openBtns = document.querySelectorAll(".open-modal");
  const closeBtns = document.querySelectorAll(".close");

  openBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modals[index].style.display = "block";
    });
  });

  closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modals[index].style.display = "none";
    });
  });

  window.onclick = function (event) {
    modals.forEach((modal) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };
});
function openModal(imageId) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("modalCaption");

  const selectedCard = document.querySelector(`[onclick="openModal('${imageId}')"] img`);
  modalImg.src = selectedCard.src;
  caption.innerHTML = selectedCard.alt;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
