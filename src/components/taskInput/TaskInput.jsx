import "../../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { setTask, addTask } from "../../states/taskSlice/taskSlice";
import { useEffect, useRef } from "react";

export const TaskInput = ({ passInputRef }) => {
  const dispatch = useDispatch();
  const task = useSelector((store) => store.task.task);
  const updateMode = useSelector((store) => store.task.updateMode);
  const inputRef = useRef(null);
  useEffect(() => {
    passInputRef(inputRef);
  }, []);

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="What you have to do?"
        value={task}
        ref={inputRef}
        onChange={(e) => dispatch(setTask(e.target.value))}
        onKeyDown={(e) => e.key == "Enter" && dispatch(addTask())}
      />
      {updateMode ? (
        <button className="btn" onClick={() => dispatch(addTask())}>
          Update
        </button>
      ) : (
        <button className="btn" onClick={() => dispatch(addTask())}>
          Add
        </button>
      )}
    </div>
  );
};
