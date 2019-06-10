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
      console.log(res);
      res.forEach(element => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const apt = aptList.filter(apt => apt.value === element.apt);
        a.setAttribute("href", "write.html");
        list
          .appendChild(li)
          .appendChild(a)
          .append(apt[0].title);
      });
      loading.style.display = "none";
    });
  }
};

index.initialize();
