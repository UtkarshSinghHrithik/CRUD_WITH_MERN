
import AddUsers from './AddUsers/AddUsers';
import './App.css';
import User from './getUsers/User';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import UpdateUser from './UpdateUser/UpdateUser';
// import ThemeToggle from './ThemeToggle';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



{/* <ThemeToggle>


</ThemeToggle> */}
<h1> CRUD </h1>




<Router>
  <Routes>
    <Route path='/' element={<User/>}></Route>
    <Route path='/add' element={<AddUsers/>}></Route>
    <Route path='/update/:id' element={<UpdateUser/>}></Route>

  </Routes>
</Router>





    </div>
  );
}

export default App;
