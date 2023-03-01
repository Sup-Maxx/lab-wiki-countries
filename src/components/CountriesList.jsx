import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

function CountriesList(props){

    const [countries, setCountries] = useState([])

    /* na verdade não sei bem pqq usavamos useEffect aqui */
    useEffect(() => {
        setCountries(props.countries)
    },[props.countries])

    return(
        <div>
            <h1>Countries</h1>
            {countries.map((oneCountry) => {
                return(
                    <div key={oneCountry.name.common}>
                        
                        <Link to={`/${oneCountry.name.common}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}/>
                        <h3>
                        {oneCountry.name.common}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList