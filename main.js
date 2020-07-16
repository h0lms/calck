const btn = $(".btn");
const block = $(".block");
const idWords = $("#idWords");
const elemRed = block.find("red");

const oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "text3.json", true);
oReq.send();

function reqListener() {
  let friends = JSON.parse(this.responseText);
  for (let i = 0; i < friends.length; i++) {
    let nameFr = friends[1].name;
  }
  console.log(friends[2].name);
  return friends;
}

console.log(ff);

btn.on("click", (e) => {
  e.preventDefault();

  if (idWords.val() == "hi") {
    $(".red").remove();
    $(".blue").remove();
    block.append(`<div class="red">` + oReq.responseText + `</div>`);
    $(".red").addClass("orange");
  } else {
    $(".red").remove();
    $(".blue").remove();
    block.append(`<div class="blue">Пока!</div>`)
    $(".blue").addClass("white");
  }

});