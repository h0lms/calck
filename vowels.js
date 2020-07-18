const resultVowels = $(".resut-vowels");
const btn = $(".form-vowels__btn");
const input = $(".form-vowels__input");
const vowels = ['а', 'е', 'у', 'ы', 'о', 'я','ё', 'и', 'э', 'ю'];
const test = "Привет, как дела?"

btn.on("click", (e) => {
  e.preventDefault();

  const textInput = input.val();
  
  resultVowels.text(getVowels(textInput));
});


const getVowels = array => {
  let vovelsStr = "";

  for (let i = 0; i < array.length; i++) {
    const element = array[i].toLowerCase();
    
    if (vowels.includes(element)) {
      vovelsStr += element;
    }
  }
  
  return vovelsStr;
}
