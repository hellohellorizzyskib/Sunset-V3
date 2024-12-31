const key = localStorage.getItem("key");

document.addEventListener("keydown", function (event) {
  if (event.key === key) {
    top.location.replace("https://www.google.com");
  }
});
 
 // i will grab your ip address
 //163.123.192.9
const engine = document.getElementById("Search-engine");
const cloaks = document.getElementById("cloak");
const keyinput = document.getElementById("keyinput");
const themepicker = document.getElementById("themepicker");
const ppicker = document.getElementById("ppicker");
const server = document.getElementById("serverInput");
engine.value = localStorage.getItem("engine");
cloaks.value = localStorage.getItem("cloak");

if(localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "normal")
}

if(localStorage.getItem("bare")) {
  server.innerText = localStorage.getItem("bare");
}

themepicker.value = localStorage.getItem("theme");

 /* I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX. Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called “Linux,” and many of its users are not aware that it is basically the GNU system, developed by the GNU Project. There really is a Linux, and these people are using it, but it is just a part of the system they use. */

engine.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  localStorage.setItem("engine", selectedValue);
});

ppicker.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  localStorage.setItem("p", selectedValue);
});

cloaks.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  localStorage.setItem("cloak", selectedValue);
  top.location.reload()
});

themepicker.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  localStorage.setItem("theme", selectedValue);
  document.body.setAttribute("class", "");
  document.body.classList.add(selectedValue);
});

function savePanicKey() {
  localStorage.setItem("key", keyinput.input);
}

function saveCustomServer() {
    localStorage.setItem("bare", server.input);
}

function blank() {
  var currentUrl = top.location.href;
  if (currentUrl === "about:blank") {
    console.log(currentUrl);
  } else {
    var win = window.open();
    var url = "/";
    var iframe = win.document.createElement("iframe");
    let favicon = document.createElement("link");
    favicon.setAttribute("rel","icon");
    favicon.setAttribute("type","image/svg+xml");
    favicon.href = "/assets/img/google.png"
    top.location.replace("https://google.com");
    iframe.style.backgroundColor = "#1e1e2e";
    iframe.style.position = "fixed";
    iframe.style.top = 0;
    iframe.style.bottom = 0;
    iframe.style.left = 0;
    iframe.style.right = 0;
    iframe.style.border = "none";
    iframe.style.outline = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.src = url;

    win.document.body.appendChild(iframe);
    win.document.title = "Google"
    win.document.appendChild(favicon)
  }
}

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "1":
      document
        .getElementById("cloakingtext")
        .scrollIntoView({ behavior: "smooth" });
      document
        .querySelector(".active-section")
        .classList.remove("active-section");
      document.getElementById("cloa").classList.add("active-section");
      break;
    case "2":
      document
        .getElementById("themetext")
        .scrollIntoView({ behavior: "smooth" });
      document.getElementById("themes").classList.add("active-section");
      document
        .querySelector(".active-section")
        .classList.remove("active-section");
      break;
    case "3":
      document.getElementById("ptext").scrollIntoView({ behavior: "smooth" });
      document.getElementById("p").classList.add("active-section");
      document
        .querySelector(".active-section")
        .classList.remove("active-section");
      break;
    case "4":
      document.getElementById("acctext").scrollIntoView({ behavior: "smooth" });
      document.getElementById("account").classList.add("active-section");
      document
        .querySelector(".active-section")
        .classList.remove("active-section");
      break;
    case "5":
      document.getElementById("advtext").scrollIntoView({ behavior: "smooth" });
      document.getElementById("adv").classList.add("active-section");
      document
        .querySelector(".active-section")
        .classList.remove("active-section");
      break;
    case "6":
      document
        .getElementById("statstext")
        .scrollIntoView({ behavior: "smooth" });
      document.getElementById("stats").classList.add("active-section");
      document
        .querySelector(".active-section")
        .classList.remove("active-section");
      break;
    case "7":
      top.location.href = "https://discord.gg/m93HqTYS9M";
      break;
  }
});

async function exportData() {
  let josh = {};

  for(var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var item =  localStorage.getItem(key);
    josh[key] = item;
  }

  const string = JSON.stringify(josh, null, 2);
  const jsonblob = new Blob([string], { type: "application/json"})

  const dataurl = URL.createObjectURL(jsonblob);
  const name = "data.sunset";
  const dl = document.createElement('a');

  dl.href = dataurl;
  dl.download = name;
  document.body.appendChild(dl)
  dl.click();
  dl.remove();
  console.log("Exported Data ✅")
}
function importData() {
  const uploader = document.createElement('input')

  uploader.setAttribute("type", "file")
  uploader.setAttribute("accept", ".sunset")
  document.body.appendChild(uploader)

  uploader.click();

  uploader.addEventListener("change", () => {
    console.log("File selected: ", uploader.files[0]);
    const reader = new FileReader();

  reader.onload = (event) => {
    const fileContent = event.target.result;
    const parsed = JSON.parse(fileContent)
    console.log(parsed)
    for (var key in parsed) {
      localStorage.setItem(key, parsed[key])
      console.log("Key added: " + key)
    }
  }
      console.log("Imported Data ✅")
    });

  uploader.remove();
}

async function wipeData() {
  localStorage.clear();
  const databases = await window.indexedDB.databases()
  databases.forEach(db => { window.indexedDB.deleteDatabase(db.name) })
  console.log("Deleted Data ✅")
  top.location.reload()
}

