function uploadFiles() {
  const files = document.getElementById("fileInput").files;
  const list = document.getElementById("fileList");

  list.innerHTML = "";

  for (let i = 0; i < files.length; i++) {
    const container = document.createElement("div");

    const name = document.createElement("p");
    name.textContent = files[i].name;

    const progress = document.createElement("progress");
    progress.value = 0;
    progress.max = 100;

    const percent = document.createElement("span");
    percent.textContent = " 0%";

    container.appendChild(name);
    container.appendChild(progress);
    container.appendChild(percent);

    list.appendChild(container);

    let value = 0;

    const interval = setInterval(() => {
      value += 10;
      progress.value = value;
      percent.textContent = " " + value + "%";

      if (value >= 100) {
        clearInterval(interval);
        percent.textContent = " Uploaded ✅";
      }
    }, 300);
  }
}