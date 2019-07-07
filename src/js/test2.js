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

// function c() {
//   alert(document.querySelector("input").value);
// }

// document.querySelector("#alert3").addEventListener("click", function() {
//   c();
// });
