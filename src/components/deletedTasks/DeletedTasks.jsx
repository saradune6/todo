import React from "react";

const DeletedTasks = ({ deletedTasks }) => {
  return (
    <div className="deleted-tasks-container">
      {deletedTasks.map((deletedTask) => (
        <div className="deleted-task-container" key={deletedTask.id}>
          <li className="deleted-task-item">{deletedTask.task}</li>
        </div>
      ))}
    </div>
  );
};

export default DeletedTasks;
