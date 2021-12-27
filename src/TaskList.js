export function TaskList({ task, deleteButton }) {
  return (
    <div className='Task-Box'>
      <p >{task} {deleteButton}</p>
    </div>
  );
}
