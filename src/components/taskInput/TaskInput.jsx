import "../../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { setTask, addTask } from "../../states/taskSlice/taskSlice";

export const TaskInput = () => {
  const dispatch = useDispatch();
  const task = useSelector((store) => store.task.task);
  const taskList = useSelector((store) => store.task.taskList);
  console.log(taskList);
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="What you have to do?"
        value={task}
        onChange={(e) => dispatch(setTask(e.target.value))}
      />
      <button className="btn" onClick={() => dispatch(addTask())}>
        Add
      </button>
    </div>
  );
};
