import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function router(url = '404') {
  const routes: any = {
    index: 'index',
    test: 'test'
  };

  const route = url === '/' ? 'index' : url.substring(1);
  const filePath = path.join(process.cwd(), `public/${routes[route]}.html`);
  

  try {
    const data = await fs.readFile(filePath);

    return data.toString();

  } catch(error: any) {
    throw new Error(error);
  }
}

export default router;