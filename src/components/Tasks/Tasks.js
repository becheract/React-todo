import {useState , useEffect} from "react";
import uuid from 'react-uuid';
import Task from "./Task/Task";
import './Tasks.scss'
import Form from '.././Tasks/Form/Form';
//redux
import { useSelector, useDispatch } from 'react-redux';
//importing the reducer from redux
import { setTasks,clearTask, changeTaskStatus, removeTask, addTasks } from './../../redux/tasksSlice';

function Tasks () {
	//redux useSelector hook
	const tasks = useSelector((state) => state.tasks.list);
	//redux dispatch hook
	const dispatch = useDispatch()
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

		dispatch(setTasks(mountedTasks))
	}, [])


	const handleClearTasks = () => {
		dispatch(clearTask([]))
	}


	const handleStatusChange = (id) => {
		//set the newly updated object to the state
		dispatch(changeTaskStatus(id));
	}


	const handleTaskRemove = (id) => {
		dispatch(removeTask(id));
	}

	const addTask = (t) => {
		dispatch(addTasks(t))
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
							/>
						)
					)}
				</div>
				<hr />
				<button className="Tasks-btn" onClick={handleClearTasks}>Clear Tasks</button>
				<Form/>
			</div>
			</>
		);
	}


export default Tasks;
