import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';
import Todo from './Todo.ts';

const db = new Database('postgres', {
  host: '127.0.0.1',
  username: 'akur8',
  password: 'password',
  database: 'akur8',
});

class TodoModel extends Model {
  static table = 'todo';

  static fields = {
	uuid: { primaryKey: true },
	title: DataTypes.STRING,
	description: DataTypes.STRING,
  };
}

db.link([TodoModel]);

//await db.sync({ drop: true });

function getAllTodos(): Promise<Todo[]> {
	return TodoModel.all();
}

function insertTodo(todo: Todo): Promise<Todo> {
	return TodoModel.create({
		uuid: v4.generate(),
		title: todo.title,
		description: todo.description
	});
}

function deleteTodo(todoUuid: string) {
	return TodoModel.deleteById(todoUuid);
}

export {
	getAllTodos,
	insertTodo,
	deleteTodo
};