const sidebarstatus = localStorage.getItem("sidebarstatus");
const togglebutton = document.getElementById("toggle-btn");
const sidebars = document.getElementById("sidebar");
const swAllowedHostnames = ["localhost", "127.0.0.1"];
const stockSW = "/wiki/space/sw.js?paragraph=20&line=13";
const engine = localStorage.getItem("engine");
const p = localStorage.getItem("p");
const clo = localStorage.getItem("cloak");
const favicon = document.getElementById("favicon");
const key = localStorage.getItem("key");
const swreg = localStorage.getItem('swreg')


document.addEventListener("keydown", function (event) {
  if (event.key === key) {
    top.location.replace("https://www.google.com");
  }
});

if(localStorage.getItem('bare')) {
  __uv$config.bare = localStorage.getItem('bare');
  console.log("Loaded Custom Bare ✅");
}

document.addEventListener("DOMContentLoaded", (event) => {

  if(window.screen.width < 800) {
    toggleSidebar();
  }

  if (clo === null) {
    localStorage.setItem("cloak", "none");
  }

  if(key === null) {
    localStorage.setItem("key", "`")
  }

  if(clo === "none") {
      favicon.href = "/favicon.svg";
      document.title = "Sunset V3";
  }else if(clo === "google") {
      favicon.href = "/assets/img/google.png";
      document.title = "Google";
  }else if(clo === "docs") {
      favicon.href = "/assets/img/docs.png";
      document.title = "Google Docs";
}else if(clo === "classroom") {
      favicon.href = "/assets/img/classroom.png";
      document.title = "Classes";
  }else if(clo === "desmos") {
      favicon.href = "/assets/img/desmos.ico";
      document.title = "Desmos Classroom Activities";
  }else if(clo === "canvas") {
      favicon.href = "/assets/img/canvas.png";
      document.title = "Canvas";
  }else if(clo === "school") {
      favicon.href = "/assets/img/school.png";
      document.title = "Schoolagy";
  }else if(clo === "power") {
      favicon.href = "/assets/img/powerschool.png";
      document.title = "Login | PowerSchool";
  }

  const page = localStorage.getItem("page");
  const iframe = document.getElementById("frame");
  if (page === null) {
  } else {
  if(page === "home") {
        iframe.src = "/home";
  }else if(page === "games") {
        iframe.src = "/g";
        document.getElementById("indexli").classList.remove("active");
        document.getElementById("gamesli").classList.add("active");
  }else if(page === "dashboard"){
        iframe.src = "/dashboard";
        document.getElementById("indexli").classList.remove("active");
        document.getElementById("dashboardli").classList.add("active");
  }else if(page === "apps"){
        iframe.src = "/a";
        document.getElementById("indexli").classList.remove("active");
        document.getElementById("appsli").classList.add("active");
  }else if(page === "apps"){
        iframe.src = "/settings";
        document.getElementById("indexli").classList.remove("active");
        document.getElementById("settingsli").classList.add("active");
    }
  }
  //check them search engine
  if (engine === null) {
    localStorage.setItem("engine", "https://www.google.com/search?q=");
  }

  if (p === null) {
    localStorage.setItem("p", "Ultraviolet");
  }
  //alright now lets register the uv service worker
  registerSW();
});

async function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      localStorage.setItem("error", "http");
    throw new Error("Service workers cannot be registered without https.");
    localStorage.setItem("error", "unsupported");
    throw new Error("Your browser doesn't support service workers.");
    window.location.href = "/error";
  }
  await navigator.serviceWorker.register(stockSW);
  if(swreg === null) {
    localStorage.setItem('swreg', 'registered')
    location.reload()
  }else {
    console.log('Service Worker Registered Using Ultraviolet ✅')
  }
}
registerSW();

setInterval(function () {
  addTime();
}, 5000);

function addTime() {
  let time = localStorage.getItem("time");
  if (time === null) {
    localStorage.setItem("time", "1");
  }
  localStorage.setItem("timeonwebsite", time + 5);
}
