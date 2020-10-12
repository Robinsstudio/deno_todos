function getAllTodos() {
	return fetch('/api/todos').then(response => response.json());
}

function addTodo(todo) {
	return fetch('/api/todos', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(todo)
	});
}

function deleteTodo(todo) {
	return fetch(`/api/todos/${todo.uuid}`, {
		method: 'DELETE'
	});
}

export default {
	getAllTodos,
	addTodo,
	deleteTodo
};