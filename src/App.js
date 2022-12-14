import './App.css';
import { Route, Routes } from "react-router-dom";
import Heading from "./components/Heading"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { ContextProvider } from "./context/GlobalContext";

console.log(ContextProvider);

function App() {
  return (
    <div>

      <div className='h-screen text-white text-center p-10'>
        <div className="container mx-auto h-full">
          <ContextProvider>{/*proporciona el contexto a los componentes hijos*/ }
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
