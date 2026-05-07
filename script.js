function uploadFiles() {
  const files = document.getElementById("fileInput").files;
  const list = document.getElementById("fileList");

  list.innerHTML = "";

  for (let i = 0; i < files.length; i++) {
    const li = document.createElement("li");
    li.textContent = files[i].name + " (Pending)";
    list.appendChild(li);
  }
}