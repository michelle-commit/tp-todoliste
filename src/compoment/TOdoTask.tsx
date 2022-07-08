import React from "react";
import { ITask } from "../Interface";

interface Props{
    task: ITask 
    completeTask(TaskNametoDelete : string): void
}

const TOdoTask=({task, completeTask}: Props)=>{
    return (
    <div className="task">
        <div className="content">
            <span>{task.TaskName}</span>
            <span>{task.Deadline}</span>
        </div>
        <button onClick={()=>{completeTask(task.TaskName);}} >X</button>
    </div>
    )
}

export default TOdoTask;