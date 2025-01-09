let gAPI = "/js/whatthesigma.json";
const key = localStorage.getItem("key");

document.addEventListener("keydown", function (event) {
  if (event.key === key) {
    top.location.replace("https://www.google.com");
  }
});

async function loadG() {
  document.querySelectorAll(".games").forEach(game => game.remove());
  const gData = await fetch(gAPI)
    .then((response) => response.text())
    .then((text) => {
      return JSON.parse(text);
    });

  gData.forEach((game) => {
    const gameicons = document.getElementById("games-container");

    const games = document.createElement("div");
    const gameimg = document.createElement("button");
    const svg = document.createElement("svg");
    svg.innerHTML = `<svg
    class="pin__icon"
    xmlns="http://www.w3.org/2000/svg"
    height="40px"
    viewBox="0 -960 960 960"
    width="40px"
    data-astro-cid-mbzrh2ma
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
      data-astro-cid-mbzrh2ma
    ></path>
  </svg>
          `;

    const pinned = localStorage.getItem("pinned");
    if (pinned.includes(game.name)) {
      svg.innerHTML = `<svg class="pin__icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-mbzrh2ma><defs> <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-mbzrh2ma><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /> </linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z" fill="url(#gradient)" data-astro-cid-mbzrh2ma /> </svg>`;
      svg.setAttribute(
        "onclick",
        `localStorage.setItem('pinned', pinned.replace('{"name": "${game.name}", "img": "${game.img}", "href": "${game.href}")); loadG(); this.innerHTML = "<svg class="pin__icon " xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-mbzrh2ma><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-mbzrh2ma /></svg>" loadG(); `
      );
    } else if (pinned === "") {
      svg.innerHTML = `<svg class="pin__icon " xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-mbzrh2ma><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-mbzrh2ma /></svg>`;
      svg.setAttribute(
        "onclick",
        `localStorage.setItem("pinned", '{"name": "${game.name}", "img": "${game.img}", "href": "${game.href}"}'); loadG(); this.innerHTML = "<svg class='pin__icon' xmlns='http://www.w3.org/2000/svg' height'40px' viewBox='0 -960 960 960' width='40px' data-astro-cid-mbzrh2ma><defs> <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%' data-astro-cid-mbzrh2ma><stop offset='0%' stop-color='#ffd700' /><stop offset='30%' stop-color='#ffa500' /><stop offset='100%'; stop-color='#ff4500' /> </linearGradient></defs><path d='m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z' fill='url(#gradient)' data-astro-cid-mbzrh2ma /> </svg>" loadG();`
      );
    } else {
      svg.innerHTML = `<svg class="pin__icon " xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" data-astro-cid-mbzrh2ma><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffd700" /><stop offset="30%" stop-color="#ffa500" /><stop offset="100%" stop-color="#ff4500" /></linearGradient></defs><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" fill="url(#gradient)" data-astro-cid-mbzrh2ma /></svg>`;
      svg.setAttribute(
        "onclick",
        `localStorage.setItem("pinned", '{"name": "${game.name}", "img": "${game.img}", "href": "${game.href}"},${pinned}'); loadG(); this.innerHTML = "<svg class='pin__icon' xmlns='http://www.w3.org/2000/svg' height'40px' viewBox='0 -960 960 960' width='40px' data-astro-cid-mbzrh2ma><defs> <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%' data-astro-cid-mbzrh2ma><stop offset='0%' stop-color='#ffd700' /><stop offset='30%' stop-color='#ffa500' /><stop offset='100%'; stop-color='#ff4500' /> </linearGradient></defs><path d='m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z' fill='url(#gradient)' data-astro-cid-mbzrh2ma /> </svg> loadG();" 
        ` 
      );
    }
    const recentg = localStorage.getItem("recentg");
    console.log(recentg);
    if(game.href.includes("/gg/")) {
 gameimg.setAttribute(
        "onclick",
        `addHistoryGame(); window.location.href =  '` +
          game.href +
          `'; localStorage.setItem('recentg', '{"name": "` +
          game.name +
          `", "img": "` +
          game.img +
          `", "href": "` +
          game.href +
          `"}` +
          recentg +
          `'); addHistoryGame();`
      );
    }
    else if (recentg === "") {
      gameimg.setAttribute(
        "onclick",
        `addHistoryGame(); window.location.href =  '` +
          __uv$config.prefix +
          __uv$config.encodeUrl(game.href) +
          `'; localStorage.setItem('recentg', '{"name": "` +
          game.name +
          `", "img": "` +
          game.img +
          `", "href": "` +
          game.href +
          `"}` +
          recentg +
          `'); addHistoryGame();`
      );
    } else {
      gameimg.setAttribute(
        "onclick",
        `addHistoryGame(); window.location.href =  '` +
          __uv$config.prefix +
          __uv$config.encodeUrl(game.href) +
          `'; localStorage.setItem('recentg', '{"name": "` +
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
    games.setAttribute("class", "games");

    games.setAttribute("data-astro-cid-mbzrh2ma", "");
    svg.setAttribute("data-astro-cid-mbzrh2ma", "");
    gameimg.setAttribute("data-astro-cid-mbzrh2ma", "");
    games.setAttribute("style", "background-image: url(" + game.img + ");");

    const gamename = document.createElement("p");
    gamename.classList.add("games__name");
    gamename.setAttribute("data-astro-cid-mbzrh2ma", "");
    gamename.innerText = game.name;

    games.appendChild(gameimg);
    games.appendChild(gamename);
    games.appendChild(svg);
    gameicons.appendChild(games);
  });
}

addEventListener("DOMContentLoaded", async (event) => {
  loadG()
});

function addHistoryGame() {
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
      `{"opened": "Game Opened", "date": "${
        month + "/" + day + "/" + year
      }", "time": "${time}"}`
    );
  } else {
    localStorage.setItem(
      "history",
      `{"opened": "Game Opened", "date": "${
        month + "/" + day + "/" + year
      }", "time": "${time}"},${history}`
    );
  }
}
