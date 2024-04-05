import "../../styles.scss";
import { useSelector, useDispatch } from "react-redux";

export const TaskListing = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((store) => store.task.taskList);

  return (
    <div className="task-container">
      <ul className="task-list">
        {taskList.map((t, i) => {
          return (
            <li className="task-list-item" key={i}>
              <p className="task-list-item__text">{t}</p>
              <div>
                <button className="btn">Update</button>
                <button className="btn">Del</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
