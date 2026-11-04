// Quantum Hall at https://hall.quantumv.dev: the gallery's static files.
// Any other host (the old hall.steady-watch.com, the workers.dev address) is sent to hall.quantumv.dev
// with a permanent redirect, keeping the path and query.
const HOME = 'hall.quantumv.dev';

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.hostname !== HOME && url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') {
      url.protocol = 'https:'; url.hostname = HOME; url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(req);
  },
};
