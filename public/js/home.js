const recenta = localStorage.getItem("recenta");
const recentg = localStorage.getItem("recentg");
const pinned = localStorage.getItem("pinned");
const history = localStorage.getItem("history");
const key = localStorage.getItem("key");
//removed the notes shits going to get confusing
//create the localstorage options if they dont alr exist

document.addEventListener("keydown", function (event) {
  if (event.key === key) {
    top.location.replace("https://www.google.com");
  }
});

if(localStorage.getItem('bare')) {
  __uv$config.bare = localStorage.getItem('bare');
  console.log("Loaded Custom Bare ✅");
}

if (recenta === null) {
  localStorage.setItem("recenta", "");
}
if (recentg === null) {
  localStorage.setItem("recentg", "");
}
if (pinned === null) {
  localStorage.setItem("pinned", "");
}
if (history === null) {
  localStorage.setItem("history", "");
}

async function loadMain() {
  document.querySelectorAll(".shortcut").forEach(game => game.remove());
  let jsonfile = "/js/g.json";
  const data = await fetch(jsonfile)
    .then((response) => response.text())
    .then((text) => {
      return JSON.parse(text);
    });
  data.forEach((g) => {
    const mainWrapper = document.getElementById("shortcut-container");
    const mainG = document.createElement("div");
    const gBttn = document.createElement("button");
    const gSvg = document.createElement("svg");
    const gName = document.createElement("p");

    gBttn.classList.add("btn-redirect");
    gName.classList.add("shortcut__name");
    mainG.setAttribute("class", "shortcut");
    gBttn.setAttribute("data-astro-cid-reuxuyy6", "");
    mainG.setAttribute("data-astro-cid-reuxuyy6", "");
    gName.setAttribute("data-astro-cid-reuxuyy6", "");

    if (pinned.includes(g.name)) {
      gSvg.innerHTML = `<svg class="pin__icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-reuxuyy6><defs> <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-reuxuyy6><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /> </linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z" fill="url(#gradient)" data-astro-cid-reuxuyy6 /> </svg>`;
      gSvg.setAttribute(
        "onclick",
        `localStorage.setItem('pinned', pinned.replace('{"name": "${g.name}", "img": "${g.img}", "href": "${g.href}")); this.innerHTML = "<svg class="pin__icon " xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-reuxuyy6><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-reuxuyy6 /></svg>"; loadMain();`
      );
    } else if (pinned === "") {
      gSvg.innerHTML = `<svg class="pin__icon " xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-reuxuyy6><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-reuxuyy6 /></svg>`;
      gSvg.setAttribute(
        "onclick",
        `localStorage.setItem("pinned", '{"name": "${g.name}", "img": "${g.img}", "href": "${g.href}"}'); this.innerHTML = "<svg class='pin__icon' xmlns='http://www.w3.org/2000/svg' height'40px' viewBox='0 -960 960 960' width='40px' data-astro-cid-reuxuyy6><defs> <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%' data-astro-cid-reuxuyy6><stop offset='0%' stop-color='#ffd700' /><stop offset='30%' stop-color='#ffa500' /><stop offset='100%'; stop-color='#ff4500' /> </linearGradient></defs><path d='m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z' fill='url(#gradient)' data-astro-cid-reuxuyy6 /> </svg>"; loadMain();`
      );
    } else {
      gSvg.innerHTML = `<svg class="pin__icon " xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-reuxuyy6><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-reuxuyy6 /></svg>`;
      gSvg.setAttribute(
        "onclick",
        `localStorage.setItem("pinned", '{"name": "${g.name}", "img": "${g.img}", "href": "${g.href}"},${pinned}'); this.innerHTML = "<svg class='pin__icon' xmlns='http://www.w3.org/2000/svg' height'40px' viewBox='0 -960 960 960' width='40px' data-astro-cid-reuxuyy6><defs> <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%' data-astro-cid-reuxuyy6><stop offset='0%' stop-color='#ffd700' /><stop offset='30%' stop-color='#ffa500' /><stop offset='100%'; stop-color='#ff4500' /> </linearGradient></defs><path d='m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z' fill='url(#gradient)' data-astro-cid-reuxuyy6 /> </svg>"; loadMain();` 
      );
    }

    if (recenta === "") {
      gBttn.setAttribute(
        "onclick",
        `addHistoryApp(); localStorage.setItem('recenta', '{"name": "${g.name}", "img":"${g.img}", "href": "${g.href}"} '); window.location.href = '` +
          __uv$config.prefix +
          __uv$config.encodeUrl(g.href) +
          `'`
      );
    } else {
      gBttn.setAttribute(
        "onclick",
        `addHistoryApp(); localStorage.setItem('recenta', '{"name": "${g.name}", "img":"${g.img}", "href": "${g.href}"}, ${recenta} '); window.location.href = '` +
          __uv$config.prefix +
          __uv$config.encodeUrl(g.href) +
          `'`
      );
    }
    mainG.setAttribute("style", `background-image: url(${g.img});`);
    gName.innerText = g.name;

    mainG.appendChild(gBttn);
    mainG.appendChild(gSvg);
    mainG.appendChild(gName);
    mainWrapper.appendChild(mainG);
  });
}

function addHistoryApp() {
  let date = new Date();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const history = localStorage.getItem("history");

  if (history === "") {
    localStorage.setItem(
      "history",
      `{"opened": "App Opened", "date": "${
        month + "/" + day + "/" + year
      }", "time": "${time}"}`
    );
  } else {
    localStorage.setItem(
      "history",
      `{"opened": "App Opened", "date": "${
        month + "/" + day + "/" + year
      }", "time": "${time}"},${history}`
    );
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  loadMain();
  console.log("Loaded Main ✅");
});
