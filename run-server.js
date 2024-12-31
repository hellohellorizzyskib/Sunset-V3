import { createBareServer } from "@tomphttp/bare-server-node";
import http from "node:http";
import express from "express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const app = express();
const server = http.createServer();
const bare = createBareServer("/bear/");
const PORT = 8080;
const base = "/";
const __dirname = process.cwd();
app.use(base, express.static("dist/client/"));
app.use(ssrHandler);
app.use(express.static(__dirname + "/public"));
//https://en.wikipedia.org/wiki/Epoxy
app.use("/epox/", express.static(epoxyPath));
app.use("/bears/", express.static(baremuxPath));

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    wisp.routeRequest(req, socket, head);
  }
});

server.listen(PORT);

server.on("listening", () => {
  console.log("sigma");
  console.log("http://localhost:" + PORT);
});

// SIGMA SHUTDOWN
server.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
