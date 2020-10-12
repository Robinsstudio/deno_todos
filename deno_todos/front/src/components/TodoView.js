import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import todoService from '../TodoService';

class TodoView extends Component {
	constructor(props) {
		super(props);

		this.deleteTodo = this.deleteTodo.bind(this);
	}

	deleteTodo() {
		const { todo, refresh } = this.props;
		todoService.deleteTodo(todo).then(() => refresh());
	}

	render() {
		const { todo } = this.props;

		return (
			<Card variant="outlined" classes={{ root: 'todo-card' }}>
				<CardContent>
					<div className="todo-content">
						<div className="todo-delete">
							<Button
								variant="contained"
								color="secondary"
								startIcon={<DeleteIcon/>}
								onClick={this.deleteTodo}
							>
								delete
							</Button>
						</div>
						<div className="todo-title">
							<Typography variant="h6">
								{ todo.title }
							</Typography>
						</div>
						<Typography>
							{ todo.description }
						</Typography>
					</div>
				</CardContent>
			</Card>
		);
	}
}

export default TodoView;