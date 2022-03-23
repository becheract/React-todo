import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    //setTasks
    setTasks: (state,action) => {
        state.list = action.payload
    },
    //addTasks
    addTasks: (state,action) => {
         const newList = [
            ...state.list, 
            action.payload
            ];
        state.list = newList
    },
    //changeTaskStatus
    changeTaskStatus: (state,action) => {
		let updatedTasks = [...state.list]
		//for every task in the var above
		for( let task of updatedTasks) {
			//check if the id that was in the parameter is equal to the task that was selected
			if(task.id === action.payload){
				//change the status of the object to the opposite
				task.done = !task.done;
				
			}
		}

        state.list = updatedTasks
    },
    //remove Task 
    removeTask: (state,action) => {
        //var to hold all the objects aka tasks
		let updatedTasks = state.list.filter(
		//take the indivdual task as a param, 
		//if id isn't equal to the id then...
		(task) => task.id !== action.payload);
        
        state.list = updatedTasks
    },
    //clearTask 
    clearTask: (state,action) => {
        state.list = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTasks, addTasks, changeTaskStatus, removeTask, clearTask } = TasksSlice.actions

export default TasksSlice.reducer