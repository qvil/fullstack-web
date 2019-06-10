const index = {
  initialize: () => {
    index.createListAsync();
  },
  createListAsync: () => {
    const list = document.querySelector("div.list");
    const loading = document.querySelector("div.loading");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "write.html");

    myFirebase.getData().then(res => {
      console.log(res);
      list
        .appendChild(li)
        .appendChild(a)
        .append(res.apt);
      loading.style.display = "none";
    });
  }
};

index.initialize();
