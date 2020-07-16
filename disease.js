const idWords = $("#idWords");
const block = $(".block");
const btn = $(".btn");
const text = $('.text');

btn.on("click", (e) => {
  e.preventDefault();

  let idWordsVal = idWords.val();
  
  $.getJSON('disease.json', function(emp) { 
    if (idWordsVal === "gripp") {
      text.html(emp.gripp);
    }
    if (idWordsVal === "vet") {
      text.html(emp.vet);
    }
  }); 
})