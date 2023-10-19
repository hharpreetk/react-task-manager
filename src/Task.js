export default function Task({task, toggleDone, deleteTask}){
   return <><input type="checkbox" checked={task.done} onChange={(e)=>{toggleDone(task.id, e.target.checked)}} />{task.text}<button onClick={()=>deleteTask(task.id)}>Delete</button></>
}