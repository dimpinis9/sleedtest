import "./App.css";
import TaskManager from "./components/TaskManager";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/preferencesSlice";

function App() {
  const theme = useSelector((state) => state.preferences.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={handleToggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"} Mode
      </button>
      <TaskManager />
    </div>
  );
}

export default App;
