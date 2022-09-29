import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer  from './Components/ItemListContainer/IntemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
