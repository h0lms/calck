const sectionBtn = $(".section__btn");
const btn = $(".btn");
const result = $(".section__result");

btn.on("click", (e) => {
  e.preventDefault();
  let inputMin = parseInt($(".section__input-min").val());
  let inputMax = parseInt($(".section__input-max").val());

  result.text(getRandomNumber(inputMin, inputMax));
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}