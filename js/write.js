function initialize() {
  // window.location.href
  const url = new URL(window.location.href);
  const apt = url.searchParams.get("apt");
  const dong = url.searchParams.get("dong");
  const ho = url.searchParams.get("ho");
  const requirement = url.searchParams.get("requirement");
  createAptList(aptList);

  document.querySelector(".apt-list").value = apt ? apt : aptList[0].value;
  document.querySelector(".dong").value = dong;
  document.querySelector(".ho").value = ho;
  document.querySelector(".requirement").value = requirement;
  // getDataFromDatabase();

  // Event Listener
  // 문서 작성하다가 나가지는 경우 막음
  // window.addEventListener("beforeunload", handleBeforeUnload);

  document.querySelector(".save-button").addEventListener("click", () => {
    myFirebase.setData(getAllData());
  });
  document.querySelector(".reset-button").addEventListener("click", initForm);
}

function createAptList(aptList) {
  const aptListSelect = document.querySelector(".apt-list");
  aptList.forEach(function(element, index) {
    aptListSelect.options[index] = new Option(element.title, element.value);
  });
}

function getAllData() {
  const apt = document.querySelector(".apt-list").value;
  const docName = apt;
  const dong = document.querySelector(".dong").value;
  const ho = document.querySelector(".ho").value;
  const requirement = document.querySelector(".requirement").value;
  const dataObj = { docName, apt, dong, ho, requirement };
  // alert(JSON.stringify(dataObj));
  return dataObj;
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
