import { useState } from "react";
import { TaskInput } from "./components/taskInput/TaskInput";
import { TaskListing } from "./components/taskListing/TaskListing";
import "./styles.scss";

function App() {
  const [inputRef, setInputRef] = useState(null);

  const passInputRef = (prop) => {
    setInputRef(prop);
  };

  return (
    <>
      <div className="main-container">
        <TaskInput passInputRef={passInputRef} />
        <TaskListing inputRef={inputRef} />
      </div>
    </>
  );
}

export default App;
