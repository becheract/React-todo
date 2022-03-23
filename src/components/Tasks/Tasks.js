import {useState , useEffect} from "react";
import uuid from 'react-uuid';
import Task from "./Task/Task";
import './Tasks.scss'
import Form from '.././Tasks/Form/Form';
//redux
import { useSelector, useDispatch } from 'react-redux';
//importing the reducer from redux
import { setTasks,clearTask, changeTaskStatus, removeTask, addTasks } from './../../redux/tasksSlice';
import api from '../../Api/index';
import LoadingIcon from "../../assets/LoadingIcon";
function Tasks () {
	const [loading, setLoading] = useState(true); 
	//redux useSelector hook
	const tasks = useSelector((state) => state.tasks.list);
	//redux dispatch hook
	const dispatch = useDispatch()
	//var to hold all the objects aka tasks
	const [updatedTasks, setUpdatedTasks] = useState([]);
	


	useEffect(() => {
		console.log("Mounted!")
		api.get('/tasks')
		.then((res) => {
			if(res.status === 200){
				console.log(res)
				dispatch(setTasks(res.data));
				setLoading(false); 
			}
		}).catch((err) => {
			alert(err);
		});

	}, [])


	const handleClearTasks = () => {
		api.delete(`/tasks/all`)
		.then(res => {
			if(res.status === 200){
				dispatch(clearTask([]))
			}
		}).catch((err) => {
			alert(err.message)
		})

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
			{loading && ( 
  				<LoadingIcon/>
			)}
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
