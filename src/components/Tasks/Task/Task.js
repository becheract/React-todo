import './Task.scss'
import {MdTaskAlt} from 'react-icons/md'
import { setTasks,clearTask, changeTaskStatus, removeTask, addTasks } from './../../../redux/tasksSlice';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../Api/index';
function Task(props) {

	//redux useSelector hook
	const tasks = useSelector((state) => state.tasks.list);
	//redux dispatch hook
	const dispatch = useDispatch()

	const handleStatusClick = () => {
		const updatedTask = { 
			...props.task, 
			done: !props.task.done 
		  };

		const id = props.task.id;
		api.put(`tasks/${id}`, updatedTask )
		.then((res) => {
			if(res.status === 200) {
				dispatch(changeTaskStatus(id));
			}
		}).catch((err) => {
			alert(err.message)
		})
		
	}

	const handleStatusClickR = () => {
		const id = props.task.id;
		api.delete(`tasks/${id}`)
		.then((res) => {
			if(res.status === 200){
				dispatch(removeTask(id));
			}
		}).catch((err) => {
			alert(err.message);
		})
		
	}

	let statusColor;

	if(props.task.done === true){
		statusColor = 'green';
	}else if (props.task.done === false) {
		statusColor = 'red'
	}else {
		statusColor = 'green'
	}

	const statusStyles = {
		color : statusColor
	}

	return (
		<div className="task-container">
			
			<div className='task-idiv-container'>
				<h3 className='task-title'> <MdTaskAlt/>{props.task.description}</h3>
				<div className='task-id'>Id: {props.task.id}</div>
				<div> Status:   <span  style={statusStyles}>{props.task.done
					? 'Completed' 
					: 'Not Completed'
				}</span>
				<button onClick={handleStatusClick} className='task-btn'>Change Status</button>
				<button onClick={handleStatusClickR} className='task-btn'>Remove Task</button>
				</div>
			</div>
		</div>
	);
}

export default Task;