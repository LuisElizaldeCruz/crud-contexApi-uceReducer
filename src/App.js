import './App.css';
import { Route, Routes } from "react-router-dom";
import Heading from "./components/Heading"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  return (
    <div>
      <Heading />


      <Routes>
        <Route path="expenses" element={<TaskForm />} />
        <Route path="invoices" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;
