// import CreateTask from "../createTask";
// import ListItems from "../listItems";
import { lazy, Suspense, useState } from "react";
const CreateTask = lazy(() => import("../createTask"));
const ListItems = lazy(() => import("../listItems"));

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  const getTask = (text) => {
    let newTask = [...taskList];
    const task = {
      id: Date.now(),
      task: text,
    };

    newTask.push(task);
    setTaskList(newTask);
    if (!showComponent) {
      setShowComponent(true);
    }
  };

  const removeTask = (taskId) => {
    // const taskId = Number(event.target.id);
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    console.log("asa", updatedTaskList)
    setTaskList(updatedTaskList);
    if (updatedTaskList.length === 0) {
      setShowComponent(true);
    }
    console.log(`Deleted task - ${taskId}`);
  };

  return (
    <Suspense fallback={<div className="loading-container">Loading...</div>}>
      <>
        <CreateTask getTask={getTask} />
        {showComponent && (
          <ListItems taskList={taskList} setTaskList={setTaskList} removeTask={removeTask} />
        )}
      </>
    </Suspense>
  );
};

export default Todo;
