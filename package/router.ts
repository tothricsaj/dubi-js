import fs from 'fs/promises';
import path from 'path';

import { RouterInput } from "./Interfaces/Router";

async function router(url = '404', routes: RouterInput) {

  const route = url === '/' ? 'index' : url.substring(1);
  const filePath = path.join(process.cwd(), `public/${routes[route].url}.html`);
  
  console.log('filePath ----->>>>>>>', filePath);

  try {
    const data = await fs.readFile(filePath);

    return data.toString();

  } catch(error: any) {
    throw new Error(error);
  }
}

export default router;