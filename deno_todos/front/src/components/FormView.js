import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import todoService from '../TodoService';

class FormView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: ''
		};

		this.addTodo = this.addTodo.bind(this);
		this.updateTitle = this.updateTitle.bind(this);
		this.updateDescription = this.updateDescription.bind(this);
	}

	updateTitle(event) {
		const { value: title } = event.target;
		this.setState({ title });
	}

	updateDescription(event) {
		const { value: description } = event.target;
		this.setState({ description });
	}

	addTodo() {
		const { props: { refresh }, state: { title, description } } = this;
		todoService.addTodo({ title, description }).then(() => refresh());
	}

	render() {
		const { title, description } = this.state;

		return (
			<Card variant="outlined" classes={{ root: 'todo-card' }}>
				<CardContent>
					<form autoComplete="off" className="todo-form">
						<Typography variant="h6">
							New Todo
						</Typography>

						<TextField
							id="title"
							label="Title"
							value={title}
							onChange={this.updateTitle}
							required
						></TextField>

						<TextField
							id="description"
							label="Description"
							value={description}
							onChange={this.updateDescription}
						></TextField>

						<Button
							variant="contained"
							color="primary"
							startIcon={<AddIcon/>}
							onClick={this.addTodo}
						>
							create
						</Button>
					</form>
				</CardContent>
			</Card>
		);
	}
}

export default FormView;