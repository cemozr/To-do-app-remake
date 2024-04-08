import "../../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../../states/taskSlice/taskSlice";

export const Task = ({ inputRef }) => {
  const dispatch = useDispatch();
  const taskList = useSelector((store) => store.task.taskList);

  return (
    <ul className="task-list">
      {taskList.map((t, i) => {
        console.log(t);
        return (
          <li className="task-list-item" key={i}>
            <p className="task-list-item__text">{t}</p>
            <div>
              <div className="task-list-btn-container">
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(updateTask(i)), inputRef.current.focus();
                  }}
                >
                  Update
                </button>
                <button
                  className="btn"
                  onClick={(e) => dispatch(deleteTask(i))}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
