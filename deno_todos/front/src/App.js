import React, { Component, Fragment } from 'react';

import ToolbarView from './components/ToolbarView';
import FormView from './components/FormView';
import TodoView from './components/TodoView';

import todoService from './TodoService';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};

		this.refresh = this.refresh.bind(this);
	}

	refresh() {
		todoService.getAllTodos().then(todos => this.setState({ todos }));
	}

	componentDidMount() {
		this.refresh();
	}

	render() {
		const { todos } = this.state;

		return (
			<Fragment>
				<ToolbarView/>
				<FormView refresh={this.refresh}/>
				{ todos.map(todo => <TodoView todo={todo} refresh={this.refresh} key={todo.uuid}/>) }
			</Fragment>
		);
	}
}

export default App;
