import "../../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { Task } from "../task/Task";

export const TaskListing = ({ inputRef }) => {
  return (
    <div className="task-container">
      <Task inputRef={inputRef} />
    </div>
  );
};
