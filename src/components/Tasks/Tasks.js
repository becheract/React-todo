import {useState , useEffect} from "react";
import uuid from 'react-uuid';
import Task from "./Task/Task";
import './Tasks.scss'
import Form from '.././Tasks/Form/Form';

function Tasks () {
	const [tasks,setTasks] = useState([])
	//var to hold all the objects aka tasks
	const [updatedTasks, setUpdatedTasks] = useState([]);
	console.log(tasks)


	useEffect(() => {
		console.log("Mounted!")
		const mountedTasks = [
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
			},
		];

		setTasks(mountedTasks);
	}, [])


	const handleClearTasks = () => {
		setTasks([]);
	}


	const handleStatusChange = (id) => {
		
		let updatedTasks = [...tasks]
		//for every task in the var above
		for( let task of updatedTasks) {
			//check if the id that was in the parameter is equal to the task that was selected
			if(task.id === id){
				//change the status of the object to the opposite
				task.done = !task.done;
				
			}
		}
		//set the newly updated object to the state
		setTasks(updatedTasks)
	}


	const handleTaskRemove = (id) => {
		//var to hold all the objects aka tasks
		let updatedTasks = tasks.filter(
			//take the indivdual task as a param, 
			//if id isn't equal to the id then...
			(task) => task.id !== id
		);
		//set the state of the task to 
		setTasks(updatedTasks);
	}

	const addTask = (t) => {
		const updatedTasks = [
		...tasks, 
		t
		];
		setTasks(updatedTasks);
	}


		return (
			<>
			<div className="Tasks-container">
				<h2 className="SubTitle">These are the tasks:</h2>
				<div className="item-container">
					{tasks.map(
						(task, index) => (
							<Task
								key={index}
								task={task}
								handleStatusChange={handleStatusChange}
								handleTaskRemove={handleTaskRemove}
							/>
						)
					)}
				</div>
				<hr />
				<button className="Tasks-btn" onClick={handleClearTasks}>Clear Tasks</button>
				<Form addTask={addTask}/>
			</div>
			</>
		);
	}


export default Tasks;
