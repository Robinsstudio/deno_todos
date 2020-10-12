import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase';

class ToolbarView extends Component {
	render() {
		return (
			<AppBar position="sticky">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<MenuIcon/>
					</IconButton>
					<Typography variant="h6" style={{ flexGrow: '1' }}>
						My Todos
					</Typography>
					<div className="search-field">
						<SearchIcon/>
						<InputBase
							placeholder="Search..."
							inputProps={{ style: { color: 'rgb(255, 255, 255, .75)' }, spellCheck: 'false' }}
						></InputBase>
					</div>
				</Toolbar>
			</AppBar>
		);
	}
}

export default ToolbarView;