const response: Response = await fetch('http://robinsstudio.fr/');
const page: Uint8Array = new Uint8Array(await response.arrayBuffer());

Deno.stdout.write(page);