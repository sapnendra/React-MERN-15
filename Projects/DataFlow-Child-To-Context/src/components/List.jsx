import { useContext, useRef, useState } from "react";
import { MyTask } from "../context/InputContext";
import { alert } from "react-alertify-mini";

const List = ({ item }) => {
  const { tasks, setTasks } = useContext(MyTask);
  const taskRef = useRef(null);
  const [isEditable, setIsEditable] = useState(false);

  const handleUpdate = () => {
    setIsEditable(!isEditable);
    if (!isEditable && taskRef.current) {
      taskRef.current.focus();
    }
  };

  const changeContent = (id) => {
    const overWriteTask = tasks.find((item) => item.id === id);
    overWriteTask.task = taskRef.current.innerText;
    setIsEditable(!isEditable);
    setTasks([...tasks]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert.warning("Task updated...!");
  };

  const handleDelete = (id) => {
    const deletedTasks = tasks.filter((item) => item.id !== id);
    setTasks(deletedTasks);
    localStorage.setItem("tasks", JSON.stringify(deletedTasks));
    alert.success("Task deleted...!");
  };

  return (
    <div className="mt-2 w-full flex items-center justify-between gap-5 border p-3 rounded-lg border-gray-300">
      <p
        style={{
          border: isEditable ? "2px solid #007bff" : "",
          cursor: isEditable ? "text" : "",
        }}
        ref={taskRef}
        className="text-lg font-medium p-2.5 rounded-sm min-h-[50px]"
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
      >
        {item.task}
      </p>
      <div className="flex gap-2">
        {isEditable ? (
          <button
            onClick={() => changeContent(item.id)}
            className="hover:scale-105 duration-150 active:scale-95 px-4 cursor-pointer py-2 bg-blue-600 text-white font-bold rounded-lg"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="hover:scale-105 duration-150 active:scale-95 px-4 cursor-pointer py-2 bg-yellow-600 text-white font-bold rounded-lg"
          >
            Update
          </button>
        )}
        <button
          onClick={() => handleDelete(item.id)}
          className="hover:scale-105 duration-150 active:scale-95 px-4 cursor-pointer py-2 bg-red-600 text-white font-bold rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
