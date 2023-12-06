import { useState } from "react";
import DeletedTasks from '../deletedTasks/DeletedTasks';

const ListItems = ({ taskList, removeTask }) => {
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [showDeletedTasks, setShowDeletedTasks] = useState(false);

  const handleToggleView = () => {
    setShowDeletedTasks((prevShowDeletedTasks) => !prevShowDeletedTasks);
  };


// const handleRemoveTask = (event) => {
//  setDeletedTasks(updatedTaskList);

//     const taskId = Number(event.target.id);
//     removeTask(taskId);
//   };

const handleRemoveTask = (event) => {
  const taskId = Number(event.target.id);
  const deletedTask = taskList.find((task) => task.id === taskId);

  // Only update deletedTasks if a task is actually deleted
  if (deletedTask) {
    setDeletedTasks((prevDeletedTasks) => [...prevDeletedTasks, deletedTask]);
  }

  // Remove the task from the taskList
  removeTask(taskId);
};

  
  return (
    <div className="task-list-container">
      <div className="toggle-container">
        <button
          className="toggle-button1"
          onClick={() => setShowDeletedTasks(false)}
        >
          Task List
        </button>
        <button
          className="toggle-button2"
          onClick={() => setShowDeletedTasks(true)}
        >
          Deleted Tasks
        </button>
      </div>

      {showDeletedTasks ? (
        <DeletedTasks deletedTasks={deletedTasks} />
      ) : (
        <>
          {taskList.map((item) => (
            <div className="list-item-container" key={item.id}>
              <li className="task-item">{item.task}</li>
              <button
                className="delete-button"
                id={item.id}
                onClick={handleRemoveTask}
              >
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListItems;