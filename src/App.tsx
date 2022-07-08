import React,{ChangeEvent,useState} from 'react';
import './App.css';
import TOdoTask from './compoment/TOdoTask';
import {ITask} from './Interface'

function App() {
    const [task,setTask]=useState<string>("")
    const [deadline,setDeadline]=useState<number>(0)
    const [todolist,setTodolist]=useState<ITask[]>([])
    

    const handleChange = (event : ChangeEvent<HTMLInputElement>) : void  =>{
      if(event.target.name=="task"){
        setTask(event.target.value)
      }else{
        setDeadline(Number(event.target.value))
      }   
      
    };

    const addTask = () : void =>{
      const newTask = {TaskName: task ,Deadline: deadline};
      setTodolist([...todolist,newTask]);
      setTask("");
      setDeadline(0);
    }

    const completeTask = (TaskNametoDelete : string): void=>{
      setTodolist(todolist.filter((task)=>{
          return task.TaskName != TaskNametoDelete
      }))
    }
  return (
    <div className="App">
        <div className="header">
          <div className="inputContainer">
            <input type="text" placeholder="Task..." name="Task" onChange={handleChange} value={task} />
            <input type="number"
             placeholder="Deadline..."
             name="deadline"
             onChange={handleChange}
             value={deadline}
            />
          </div>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="Todolist">
          {todolist.map((task:ITask, key:number) => {
         return <TOdoTask key={key} task={task} completeTask={completeTask}/>;
          })}
        </div>
        <div></div>
</div>
)    
}

export default App;
