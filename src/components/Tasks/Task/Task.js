import './Task.scss'
import {MdTaskAlt} from 'react-icons/md'

function Task(props) {

	const handleStatusClick = () => {
		const id = props.task.id;
		props.handleStatusChange(id);
	}

	const handleStatusClickR = () => {
		const id = props.task.id;
		props.handleTaskRemove(id);
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