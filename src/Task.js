export default function Task({task}){
   return <><input type="checkbox" checked={task.done} />{task.text}</>
}