let currentTitle = "Hexnrik";
const titles = ["⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜", "⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜", "⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜", "⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜", "⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜", "⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜", "⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜", "⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜", "⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜", "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜", "Henrik Schmitt", "Henrik Schmitt"];

function changeTitle() {
  document.title = currentTitle;
  const currentIndex = titles.indexOf(currentTitle);
  if (currentIndex < titles.length - 1) {
    currentTitle = titles[currentIndex + 1];
  } else {
    currentTitle = titles[0];
  }
}

setInterval(changeTitle, 300);


window.addEventListener("blur", () => {
  document.title = " Come Back! "
  })
