import { TaskInput } from "./components/taskInput/TaskInput";
import { TaskListing } from "./components/taskListing/TaskListing";
import "./styles.scss";

function App() {
  return (
    <>
      <div className="main-container">
        <TaskInput />
        <TaskListing />
      </div>
    </>
  );
}

export default App;
