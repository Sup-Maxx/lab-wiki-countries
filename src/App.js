import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from "axios"
import countries from "./countries.json"

import NavBar from './components/NavBar';
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import { useEffect, useState } from 'react';

function App() {

  const [countriesAxios, setCountriesAxios] = useState([])

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountriesAxios(response.data)
        console.log(response.data)
      })
  }, []);  
  
  return (
    <div className="App">
      <NavBar/>

    {/* incompleto. comentei para poder ver o navbar ao menos, para saber que está tudo funcional 😂 */}
      <Routes>
        <Route path="/" element={<CountriesList countries={countriesAxios}/>}/>
        <Route path="/:countryId" element={<CountryDetails countries={countriesAxios}/>}/>
      </Routes>
    </div>
  );
}

export default App;
