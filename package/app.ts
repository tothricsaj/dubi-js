import http  from 'http';
import router from './router';

// function get() {

// }

export function app(): http.Server {
  return http.createServer(async function (req, res) {
    const dataTest = await router(req.url);

    res.write(dataTest);

    return res.end();

  });
}

export function testLib() {
  console.log('testing dubi-js');
}