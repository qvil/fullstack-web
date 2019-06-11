const index = {
  initialize: () => {
    index.createListAsync();

    document.querySelector("button").addEventListener("click", () => {
      window.location.href = "./write.html";
    });
  },
  createListAsync: () => {
    const list = document.querySelector("div.list");
    const loading = document.querySelector("div.loading");

    myFirebase.getData().then(res => {
      res.forEach((element, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const aptEl = aptList.filter(apt => apt.value === element.apt);
        const { apt, dong, ho, requirement } = res[index];
        a.setAttribute(
          "href",
          `write.html?apt=${apt}&dong=${dong}&ho=${ho}&requirement=${requirement}`
        );
        list
          .appendChild(li)
          .appendChild(a)
          .append(aptEl[0].title);
      });
      loading.style.display = "none";
    });
  }
};

index.initialize();
