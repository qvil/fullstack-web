// console.log(document.querySelector(".save-button"));

function initialize() {
  const aptList = [
    {title: "7단지 1차", value: "7dangi_1"},
    {title: "7단지 2차", value: "7dangi_2"},
    {title: "7단지 3차", value: "7dangi_3"},
    {title: "라이프타운", value: "lifeTown"},
  ];
  const aptListSelect = document.querySelector(".apt-list");
  aptList.forEach(function(element) {
    aptListSelect.options[aptListSelect.options.length] = new Option(element.title, element.value);
  });

  // Event Listener
  document.querySelector(".save-button").addEventListener("click", getAllData);
}
function getAllData() {
  const dong = document.querySelector(".dong").value;
  const ho = document.querySelector(".ho").value;
  const requirement = document.querySelector(".requirement").value;
  console.log("TCL: getAllData -> dong", dong, ho, requirement);
}

// document.querySelector(".save-button").addEventListener("click", function() {
//   getAllData();
// });

initialize();