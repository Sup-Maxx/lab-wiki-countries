import axios from "axios"

import { useEffect } from "react"
import { Link, NavLink, useParams } from "react-router-dom"

export default function CountryDetails(props){
    const {countryId} = useParams()

    const findCountry = props.countries.find((foundCountry) => {
        return foundCountry.name.common === countryId
    })

    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${findCountry.alpha3Code}`)
    }, [])

    const flag = `https://flagpedia.net/data/flags/icon/72x54/${findCountry.alpha2Code.toLowerCase()}.png`
    
    const borders = props.countries.filter((foundCountry) =>{
        /* foundCountry.borders.map */
        return findCountry.borders.includes(foundCountry.alpha3Code)
    })
    


    return(
        <div>
            <img src={flag}/>
            <h1>{countryId}</h1>
            <h3>{findCountry.capital}</h3>
            {/* <h4>{findCountry.currencies.ARS.name}</h4> */}
            <p>{findCountry.area} km2</p>
            {borders.map((neighbor) => {
                return (
                <Link key={neighbor.name.common} to={`/${neighbor.name.common}`}><h6>{neighbor.name.common}</h6></Link>
                )
            })}
        </div>
    )
}

