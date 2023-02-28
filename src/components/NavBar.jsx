import { Link, NavLink } from "react-router-dom"

function NavBar(){
    return(
        <nav className="NavBar">
            <ul>
                <NavLink to="/">LAB - WikiCountries By Max and Henry</NavLink>
            </ul>
        </nav> 
    )
}

export default NavBar