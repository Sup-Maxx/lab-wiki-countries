import { useEffect, useState } from "react"

function CountriesList(props){

    const {countries, setCountries} = useState([])

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
                        <h3>{oneCountry.name.common}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList