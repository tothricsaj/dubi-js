import fs from 'fs/promises';
import path from 'path';

import { RouterInput } from "./Interfaces/Router";

async function router(url = '404', routes: RouterInput) {

  try {
    const route = url === '/' ? 'index.html' : url.substring(1);
    const filePath = path.join(process.cwd(), `public/${route}`);
    
    console.log('route ----->>>>>>', route);
    
    console.log('filePath ----->>>>>>>', filePath);
    const data = await fs.readFile(filePath);

    return data.toString();

  } catch(error: any) {
    throw new Error(error);
  }
}

export default router;