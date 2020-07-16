const form = $(".symptoms__list");
const item = $(".symptoms__item");
const input = $(".symptoms__input");
const btn = $(".btn");
const text = $(".text");

const temperature = $("input[value='temperature']");
const cough = $("input[value='cough']");
const ache = $("input[value='ache']");

input.on("change", (e) => {
  text.empty();
  text.removeClass("redClass");
  const $this = $(e.currentTarget);
  $this.removeClass("yes").attr('checked', false);
  if($this.prop('checked')) {
    $this.addClass("yes").attr('checked', true);
  }
});

btn.on("click", (e) => {
  e.preventDefault();

  const isTemperature = temperature.attr("checked") === "checked";
  const isCough = cough.attr("checked") === "checked";
  const isAche = ache.attr("checked") === "checked";

  if(isTemperature && !isCough && !isAche) {
    text.html("ОРЗ, Пневмония");
  }
  if(!isTemperature && isCough && !isAche) {
    text.html("ОРЗ, Пневмония");
  }
  if(!isTemperature && !isCough && isAche) {
    text.html("Мигрень");
  }
  if(isTemperature && isCough && !isAche) {
    text.html("ОРЗ, Пневмония");
  }
  if(isTemperature && !isCough && isAche) {
    text.html("ОРЗ");
  }
  if(!isTemperature && isCough && isAche) {
    text.html("ОРЗ");
  }
  if(isTemperature && isCough && isAche) {
    text.html("ОРЗ");
  }

})