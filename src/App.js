import './App.css';
import AddTodoForm from './components/AddTodoForm';
import ToduList from './components/ToduList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="App">
      <Toaster position="top-center" />
        <AddTodoForm />
        <ToduList />
        <TotalCompleteItems />
    </div>
  );
}

export default App;
