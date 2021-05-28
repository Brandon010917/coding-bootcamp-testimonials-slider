const btns = document.querySelector(".btns");
const cards = document.querySelectorAll(".card");
let i = 0;

/* btns.addEventListener("click", (e) => {
  if (e.target.matches(".btn-left")) {
    i--;
    if (i < 0) {
      cards[0].classList.add("card--hiddenLeft");
      i = cards.length - 1;
      cards[i].classList.remove("card--hiddenRight");
    } else {
      cards[i].classList.remove("card--hiddenLeft");
      cards[cards.length - 1].classList.add("card--hiddenRight");
    }
  } else {
    i++;
    if (i === cards.length) {
      i = 0;
      cards[i].classList.remove("card--hiddenLeft");
      cards[cards.length - 1].classList.add("card--hiddenRight");
    } else {
      cards[i].classList.remove("card--hiddenRight");
      cards[0].classList.add("card--hiddenLeft");
    }
  }
}); */

btns.addEventListener("click", (e) => {
  if (e.target.matches(".btn-right")) {
    cards.forEach((card) => {
      card.classList.add("card--hiddenLeft");
    });
    i++;
    if (i === cards.length) {
      i = 0;
      cards[i].classList.remove("card--hiddenRight", "card--hiddenLeft");
    } else {
      cards[i].classList.remove("card--hiddenRight", "card--hiddenLeft");
    }
  } else {
    cards.forEach((card) => {
      card.classList.add("card--hiddenRight");
    });
    i--;
    if (i < 0) {
      i = cards.length - 1;
      cards[i].classList.remove("card--hiddenRight", "card--hiddenLeft");
    } else {
      cards[i].classList.remove("card--hiddenRight", "card--hiddenLeft");
    }
  }
});
