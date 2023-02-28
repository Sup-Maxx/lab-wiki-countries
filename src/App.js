import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import countries from "./countries.json"

import NavBar from './components/NavBar';
import CountriesList from "./components/CountriesList"

function App() {
  return (
    <div className="App">
      <NavBar/>

    {/* incompleto. comentei para poder ver o navbar ao menos, para saber que está tudo funcional 😂 */}
      {/* <Routes>
        <Route path="/" element={<CountriesList countries={countries}/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
