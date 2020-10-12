const response = await fetch('https://robinsstudio.fr/');
const page = new Uint8Array(await response.arrayBuffer());

Deno.stdout.write(page);