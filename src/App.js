import './App.css';
import AddTodoForm from './components/AddTodoForm';
import ToduList from './components/ToduList';
import TotalCompleteItems from './components/TotalCompleteItems';


function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <ToduList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
