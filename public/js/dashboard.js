const key = localStorage.getItem("key");

document.addEventListener("keydown", function (event) {
  if (event.key === key) {
    top.location.replace("https://www.google.com");
  }
});

async function loadRA() {
  const recentapps = localStorage.getItem("recenta");
  if (recentapps === "") {
    document.getElementById("recent-apps").innerText =
      "Open an App For It To Appear Here!";
  } else {
    let ra = "[" + recentapps + "]";
    //woof is not
    const gData = JSON.parse(ra);
    gData.forEach((game) => {
      const i = document.getElementById("recent-apps");
      const g = document.createElement("div");
      g.setAttribute("class", "pinned-s");
      g.setAttribute(
        "onclick",
        `addHistoryApp(); window.location.href =  __uv$config.prefix + __uv$config.encodeUrl( '` +
          game.href +
          `'); localStorage.setItem('recenta', '{"name": "` +
          game.name +
          `", "img": "` +
          game.img +
          `", "href": "` +
          game.href +
          `"},' + localStorage.getItem('recenta') )`
      );

      g.setAttribute("data-astro-cid-3nssi2tu", "");

      g.setAttribute("style", "background-image: url('" + game.img + "');");
      i.appendChild(g);
    });
  }
}

async function loadPI() {
  document.querySelectorAll(".pinned-item").forEach(game => game.remove());
  const pinned = localStorage.getItem("pinned");
  if (pinned === "") {
    document.getElementById("pinned").innerText =
      "Pin A Game Or App For It To Appear Here!";
  } else {
    let pinnedjson = "[" + pinned + "]";
    try {
    console.log(pinnedjson)
    const g = JSON.parse(pinnedjson);
    g.forEach((g) => {
      console.log("fetched");
      const i = document.getElementById("pinned");
      const gd = document.createElement("div");
      const svg = document.createElement("svg");
      const bttn = document.createElement("button");
      const pinned = localStorage.getItem("pinned");
      const pinnedButReplacedAndItsAOnlyGame = pinned.replace(`{"name": "${g.name}", "img": "${g.img}", "href": "${g.href}"}`, "")
      const pinnedButReplacedIThinkIdk = pinned.replace(`{"name": "${g.name}", "img": "${g.img}", "href": "${g.href}"},`, "")
      svg.innerHTML =
        "<svg class='pin__icon' xmlns='http://www.w3.org/2000/svg' height'40px' viewBox='0 -960 960 960' width='40px' data-astro-cid-3nssi2tu><defs> <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%' data-astro-cid-3nssi2tu><stop offset='0%' stop-color='#ffd700' /><stop offset='30%' stop-color='#ffa500' /><stop offset='100%'; stop-color='#ff4500' /> </linearGradient></defs><path d='m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z' fill='url(#gradient)' data-astro-cid-3nssi2tu /> </svg>";
      if(pinned === `{"name": "${g.name}", "img": "${g.img}", "href": "${g.href}"}`) {
        console.log("1 game")
        svg.setAttribute(
        "onclick",
        `localStorage.setItem('pinned', ''); this.parentElement.remove(); loadPI(); `
      );
    }else {
      svg.setAttribute(
        "onclick",
        ` localStorage.setItem('pinned', '${pinnedButReplacedIThinkIdk}'); this.parentElement.remove(); loadPI();`
      );
    }
      gd.setAttribute("class", "pinned-item");
      svg.setAttribute("class", "pin__icon");
      bttn.setAttribute(
        "onclick",
        `window.location.href =  __uv$config.prefix + __uv$config.encodeUrl( '` +
          g.href +
          `'); localStorage.setItem('recenta', '{"name": "` +
          g.name +
          `", "img": "` +
          g.img +
          `", "href": "` +
          g.href +
          `"},' + localStorage.getItem('recenta') )`
      );

      gd.setAttribute("data-astro-cid-3nssi2tu", "");
      svg.setAttribute("data-astro-cid-3nssi2tu", "");
      bttn.setAttribute("data-astro-cid-3nssi2tu", "");
      bttn.setAttribute("class", "btn-redirect");

      gd.setAttribute("style", "background-image: url('" + g.img + "');");

      gd.appendChild(bttn);
      gd.appendChild(svg);
      i.appendChild(gd);
    });
  
  } catch {
    console.log("JSON Errored Out! Replacing..")
    localStorage.setItem('pinned', '');
    document.getElementById("pinned").innerText =
      "Pin A Game Or App For It To Appear Here!";
  }
}
}

async function loadRG() {
  const recentg = localStorage.getItem("recentg");
  const json = "[" + recentg + "]";
  if (recentg === "") {
    document.getElementById("recent-ga").innerText =
      "Play A Game for it to appear here!";
  } else {
    const data = JSON.parse(json);
    data.forEach((g) => {
      const wrapper = document.getElementById("recent-ga");
      const div = document.createElement("div");
      div.setAttribute("class", "pinned-s");
      div.setAttribute("data-astro-cid-3nssi2tu", "");
      div.setAttribute(
        "onclick",
        `addHistoryGame(); window.location.href = '` +
          __uv$config.prefix +
          __uv$config.encodeUrl(g.href) +
          `'`
      );
      div.setAttribute("style", `background-image: url(${g.img})`);

      wrapper.appendChild(div);
    });
  }
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

async function loadHistory() {
  const history = "[" + localStorage.getItem("history") + "]";
  const historyData = JSON.parse(history);
  historyData.forEach((history) => {
    const wrapper = document.getElementById("history-wrapper");
    const div = document.createElement("div");

    div.innerHTML = `<div class="entry-description">${history.opened}</div><div class="entry-time">${history.time}</div><div class="entry-date">${history.date}</div>`;
    div.setAttribute("class", "history-entry");
    div.setAttribute("data-astro-cid-3nssi2tu", "");

    wrapper.appendChild(div);
  });
}

addEventListener("DOMContentLoaded", (event) => {
  loadHistory();
  loadRG();
  loadRA();
  loadPI();
  console.log("Loaded Dashboard ✅")
});
