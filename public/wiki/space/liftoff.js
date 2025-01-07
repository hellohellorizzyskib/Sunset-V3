/*global Ultravioletfsfdsfds*/
self.__uv$config = {
  prefix: "/wiki/space/",
  bare: "/bear/",
  encodeUrl: Ultraviolet.codec.base64.encode,
  decodeUrl: Ultraviolet.codec.base64.decode,
  handler: "/wiki/space/handoff.js",
  client: "/wiki/space/astro.js",
  bundle: "/wiki/space/space.js",
  config: "/wiki/space/liftoff.js",
  sw: "/wiki/space/constallations.js",

  /**
   * Function to inject scripts into the doc Head
   * @type {function}
   * @param {URL} url - The URL for the rewrite function.
   * @returns {string} - The script to inject.
   */
  inject: async (url) => {
    if (url.host === "") {
      return `
                  `;
    }

    return `
        <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
        `;
  },
};
