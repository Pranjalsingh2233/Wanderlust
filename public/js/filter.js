//Tax Switch
let taxSwitch = document.getElementById("switchCheckDefault");
taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});

//Category Filter
let filters = document.getElementsByClassName("filter");
for (let filter of filters) {
  filter.addEventListener("click", () => {
    let text = filter.querySelector("p").innerText;
    document.getElementById("categoryInput").value = text;
    document.getElementById("categoryForm").submit();
  });
}
