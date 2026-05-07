function uploadFiles() {
  const files = document.getElementById("fileInput").files;
  const list = document.getElementById("fileList");

  list.innerHTML = "";

  if (files.length > 3) {
    alert("Upload in progress — processing " + files.length + " files in background");
  }

  for (let i = 0; i < files.length; i++) {
    const container = document.createElement("div");
    container.style.marginBottom = "15px";

    const name = document.createElement("p");
    name.textContent =
      files[i].name +
      " | Size: " + (files[i].size / 1024).toFixed(2) + " KB" +
      " | Type: " + files[i].type;

    const progress = document.createElement("progress");
    progress.value = 0;
    progress.max = 100;

    const percent = document.createElement("span");
    percent.textContent = " 0% (Pending)";

    container.appendChild(name);
    container.appendChild(progress);
    container.appendChild(percent);

    list.appendChild(container);

    let value = 0;

    const interval = setInterval(() => {
      value += 10;
      progress.value = value;

      if (value < 100) {
        percent.textContent = " " + value + "% (Uploading)";
      } else {
        clearInterval(interval);
        percent.textContent = " 100% (Uploaded.)";
      }
    }, 300);
  }
}