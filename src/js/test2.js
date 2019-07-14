// 1. HTML에 button 만들기
// 2. JS에서 버튼 누르면 자기 이름 alert()

function b(name) {
  alert(name);
}

document.querySelector(".alert1").addEventListener("click", function() {
  b(name);
});

document.querySelector(".alert2").addEventListener("click", function() {
  alert("taesu");
});

// document.querySelector("#alert3").addEventListener("click", function() {
// alert("text");
// });

// function alert3_click() {
// alert(document.querySelector("input").value);
// }

document.querySelector("#alert3").addEventListener("click", function() {
  alert(document.querySelector(".postmenCode").value);
});
