import React from "react";
import uuid from 'react-uuid';
import Task from "./Task/Task";
import './Tasks.scss'


class Tasks extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: []
		}
	}

	componentDidMount() {
		const tasks = [
			{
				id: uuid(),
				description: "Walk the dog",
				done: true
			},
			{
				id: uuid(),
				description: "Wash the car",
				done: false
			},
			{
				id: uuid(),
				description: "Finish the lab",
				done: false
			}
		];

		this.setState({ tasks: tasks });
	}

	handleClearTasks = () => {
		this.setState({ tasks: [] });
	}


	handleStatusChange = (id) => {
		//var to hold all the objects aka tasks
		let updatedTasks = this.state.tasks;
		console.log(updatedTasks);
		//for every task in the var above
		for( let task of updatedTasks) {
			//check if the id that was in the parameter is equal to the task that was selected
			if(task.id === id){
				//change the status of the object to the opposite
				task.done = !task.done
			}
		}
		//set the newly updated object to the state
		this.setState({ tasks : updatedTasks})
	}


	handleTaskRemove = (id) => {
		//var to hold all the objects aka tasks
		let updatedTasks = this.state.tasks.filter(
			//take the indivdual task as a param, 
			//if id isn't equal to the id then...
			(task) => task.id !== id
		);
		//set the state of the task to 
		this.setState({ tasks : updatedTasks });
	}

	render() {
		return (
			<>
			<div className="Tasks-container">
				<h2 className="SubTitle">These are the tasks:</h2>
				<div className="item-container">
					{this.state.tasks.map(
						(task, index) => (
							<Task
								key={index}
								task={task}
								handleStatusChange={this.handleStatusChange}
								handleTaskRemove={this.handleTaskRemove}
							/>
						)
					)}
				</div>
				<hr />
				<button className="Tasks-btn" onClick={this.handleClearTasks}>Clear Tasks</button>
			</div>
			</>
		);
	}
}

export default Tasks;
