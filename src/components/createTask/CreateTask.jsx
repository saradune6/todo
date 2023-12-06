import { useEffect, useRef } from "react";

const CreateTask = ({ getTask }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const addTask = () => {
        const text = inputRef.current.value;
        if (inputRef.current && inputRef.current.value.length) {
            getTask(text);
        }
        inputRef.current.value = '';
    }

    return (
        <div id="create-task-container">
            <h2 id="create-task-heading">Create Task</h2>
            <input
                type="text"
                placeholder="Enter the task"
                ref={inputRef}
                id="task-input"
            />
            <button onClick={addTask} id="create-task-button">Create Task</button>
        </div>
    );
}

export default CreateTask;
