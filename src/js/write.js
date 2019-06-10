const aptList = [
  { title: "7단지 1차", value: "7dangi_1" },
  { title: "7단지 2차", value: "7dangi_2" },
  { title: "7단지 3차", value: "7dangi_3" },
  { title: "라이프타운", value: "lifeTown" }
];

function initialize() {
  createAptList(aptList);
  // getDataFromDatabase();

  // Event Listener
  // 문서 작성하다가 나가지는 경우 막음
  // window.addEventListener("beforeunload", handleBeforeUnload);

  document.querySelector(".save-button").addEventListener("click", getAllData);
  document.querySelector(".reset-button").addEventListener("click", initForm);
}

function createAptList(aptList) {
  const aptListSelect = document.querySelector(".apt-list");
  aptList.forEach(function(element, index) {
    aptListSelect.options[index] = new Option(element.title, element.value);
  });
}

function getAllData() {
  const aptList = document.querySelector(".apt-list").value;
  const dong = document.querySelector(".dong").value;
  const ho = document.querySelector(".ho").value;
  const requirement = document.querySelector(".requirement").value;
  const dataObj = { aptList, dong, ho, requirement };
  alert(JSON.stringify(dataObj));
}

function handleBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = "";
  window.removeEventListener("beforeunload", handleBeforeUnload);
}

function initForm() {
  if (confirm("정말 초기화 하시겠습니까? 작성한 내용은 저장되지 않습니다.")) {
    const defaultAptList = aptList[0].value;
    const defaultDong = "";
    const defaultHo = "";
    const defaultRequirement = "";

    document.querySelector(".apt-list").value = defaultAptList;
    document.querySelector(".dong").value = defaultDong;
    document.querySelector(".ho").value = defaultHo;
    document.querySelector(".requirement").value = defaultRequirement;
  } else {
    return;
  }
}

function getDataFromDatabase() {
  myFirebase
    .getData()
    .then(function(res) {
      console.log(res);
      document.querySelector(".apt-list").value = res.apt;
      document.querySelector(".dong").value = res.dong;
      document.querySelector(".ho").value = res.ho;
      document.querySelector(".requirement").value = res.requirement;
    })
    .catch(function(error) {
      console.error(error);
    });
}

initialize();
