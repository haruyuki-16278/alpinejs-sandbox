// require Deno
//
// QuickStart
// - serve
//   - `deno run --allow-net --allow-read --watch server.js`

import { serve } from "https://deno.land/std@0.138.0/http/server.ts"
import { serveDir } from "https://deno.land/std@0.138.0/http/file_server.ts"

serve(async (req) => {
  const pathname = new URL(req.url).pathname
  console.log (pathname)

  return serveDir(req, {
    fsRoot: 'public',
    urlRoot: '',
    showDirListing: true,
    enableCors: true
  })
})