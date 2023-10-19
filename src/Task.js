export default function Task({task, toggleDone}){
   return <><input type="checkbox" checked={task.done} onChange={(e)=>{toggleDone(task.id, e.target.checked)}} />{task.text}</>
}