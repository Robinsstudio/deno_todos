import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import Todo from './Todo.ts';
import { getAllTodos, insertTodo, deleteTodo } from './db.ts';

const app = new Application();

const router = new Router();

router
.get('/api/todos', async ({response}) => {
	response.body = await getAllTodos();
})
.post('/api/todos', async ({request, response}) => {
	response.body = await insertTodo(await (await request.body({ type: 'json' })).value as Todo);
})
.delete('/api/todos/:uuid', async (context) => {
	context.response.body = await deleteTodo(context.params.uuid as string);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });