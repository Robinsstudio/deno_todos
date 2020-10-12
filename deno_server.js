import { serve } from 'https://deno.land/std@0.74.0/http/server.ts';

for await (const req of serve({ port: 8080 })) {
  req.respond({ body: 'Hello world!' });
}