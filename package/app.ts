import http  from 'http';
import router from './router';

import { RouterInput } from "./Interfaces/Router";

// function get() {

// }



export function app(routes: RouterInput): http.Server {
  return http.createServer(async function (req, res) {
    const dataTest = await router(req.url, routes);

    res.write(dataTest);

    return res.end();

  });
}

export function testLib() {
  console.log('testing dubi-js');
}