/*global Ultraviolet*/

const meow = {
  encode(str) {
    if (!str) return str;
    let result = "";
    let len = str.length;
    let fs = "https://";
    for (let i = 0; i < len; i++) {
      //take out https
      str.replace("https://", "");
      const char = str[i];
      result += i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char;
    }
    //put back https but encode it diff

    var endresult = result.replace("hvtrs8/-", "https%3A%2F%2F");

    return encodeURIComponent(endresult);
  },
  decode(str) {
    if (!str) return str;
    str = decodeURIComponent(str);
    let result = "";
    let len = str.length;
    for (let i = 0; i < len; i++) {
      const char = str[i];
      result += i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char;
    }
    var endresult = result.replace(`hvtrs'3C%0F'2D`, "https://");
    return endresult;
  },
};

self.__uv$config = {
  prefix: "/learning/go/",
  encodeUrl: meow.encode,
  decodeUrl: meow.decode,
  handler: "/desmos.js",
  client: "/clients.js",
  bundle: "/student.js",
  config: "/sconf.js",
  sw: "/usw.js",
};
