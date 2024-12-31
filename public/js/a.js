let gAPI = "/js/a.json";
const key = localStorage.getItem("key");

document.addEventListener("keydown", function (event) {
  if (event.key === key) {
    top.location.replace("https://www.google.com");
  }
});

async function loadG() {
  document.querySelectorAll(".apps").forEach(game => game.remove());
  const gData = await fetch(gAPI)
    .then((response) => response.text())
    .then((text) => {
      return JSON.parse(text);
    });
  gData.forEach((game) => {
    const gameicons = document.getElementById("apps-container");

    const games = document.createElement("div");
    const gameimg = document.createElement("button");
    const svg = document.createElement("svg");
    svg.innerHTML = `<svg
    class="pin__icon"
    xmlns="http://www.w3.org/2000/svg"
    height="40px"
    viewBox="0 -960 960 960"
    width="40px"
    data-astro-cid-i2kxlont
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd700" />
        <stop offset="30%" stop-color="#ffa500" /> 
        <stop offset="100%" stop-color="#ff4500" />
      </linearGradient>
    </defs>
  
    <path
      d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z"
      fill="url(#gradient)"
      data-astro-cid-i2kxlont
    ></path>
  </svg>
          `;

    const pinned = localStorage.getItem("pinned");
    if (pinned.includes(game.name)) {
      svg.innerHTML = `<svg class="pin__icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-i2kxlont><defs> <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-i2kxlont><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /> </linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z" fill="url(#gradient)" data-astro-cid-i2kxlont /> </svg>`;
      svg.setAttribute(
        "onclick",
        `localStorage.setItem('pinned', pinned.replace('{"name": "${game.name}", "img": "${game.img}", "href": "${game.href}")); this.innerHTML = "<svg class="pin__icon " xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-i2kxlont><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-i2kxlont /></svg>"; loadG(); `
      );
    } else if (pinned === "") {
      svg.innerHTML = `<svg class="pin__icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-i2kxlont><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-i2kxlont /></svg>`;
      svg.setAttribute(
        "onclick",
        `localStorage.setItem("pinned", '{"name": "${game.name}", "img": "${game.img}", "href": "${game.href}"}'); this.innerHTML = "<svg class='pin__icon' xmlns='http://www.w3.org/2000/svg' height'40px' viewBox='0 -960 960 960' width='40px' data-astro-cid-i2kxlont><defs> <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%' data-astro-cid-i2kxlont><stop offset='0%' stop-color='#ffd700' /><stop offset='30%' stop-color='#ffa500' /><stop offset='100%'; stop-color='#ff4500' /> </linearGradient></defs><path d='m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z' fill='url(#gradient)' data-astro-cid-i2kxlont /> </svg>"; loadG();`
      );
    } else {
      svg.innerHTML = `<svg class="pin__icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-i2kxlont><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-i2kxlont /></svg>`;
      svg.setAttribute(
        "onclick",
        `localStorage.setItem("pinned", '{"name": "${game.name}", "img": "${game.img}", "href": "${game.href}"},${pinned}'); this.innerHTML = "<svg class='pin__icon' xmlns='http://www.w3.org/2000/svg' height'40px' viewBox='0 -960 960 960' width='40px' data-astro-cid-i2kxlont><defs> <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%' data-astro-cid-i2kxlont><stop offset='0%' stop-color='#ffd700' /><stop offset='30%' stop-color='#ffa500' /><stop offset='100%'; stop-color='#ff4500' /> </linearGradient></defs><path d='m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z' fill='url(#gradient)' data-astro-cid-i2kxlont /> </svg>"; loadG();` 
      );
    }
    const recentg = localStorage.getItem("recenta");
    console.log(recentg);
    if (recentg === "") {
      gameimg.setAttribute(
        "onclick",
        `addHistoryApp(); window.location.href =  '` +
          __uv$config.prefix +
          __uv$config.encodeUrl(game.href) +
          `'; localStorage.setItem('recenta', '{"name": "` +
          game.name +
          `", "img": "` +
          game.img +
          `", "href": "` +
          game.href +
          `"}` +
          recentg +
          `'); addHistoryApp();`
      );
    } else {
      gameimg.setAttribute(
        "onclick",
        `addHistoryApp(); window.location.href =  '` +
          __uv$config.prefix +
          __uv$config.encodeUrl(game.href) +
          `'; localStorage.setItem('recenta', '{"name": "` +
          game.name +
          `", "img": "` +
          game.img +
          `", "href": "` +
          game.href +
          `"}` +
          `,` +
          recentg +
          `');`
      );
    }
    gameimg.classList.add("btn-redirect");
    games.setAttribute("class", "apps");

    games.setAttribute("data-astro-cid-i2kxlont", "");
    svg.setAttribute("data-astro-cid-i2kxlont", "");
    gameimg.setAttribute("data-astro-cid-i2kxlont", "");
    games.setAttribute("style", "background-image: url(" + game.img + ");");

    const gamename = document.createElement("p");
    gamename.classList.add("apps__name");
    gamename.setAttribute("data-astro-cid-i2kxlont", "");
    gamename.innerText = game.name;

    games.appendChild(gameimg);
    games.appendChild(svg);
    games.appendChild(gamename);
    gameicons.appendChild(games);
  });
}

addEventListener("DOMContentLoaded", async (event) => {
  loadG()
});

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
