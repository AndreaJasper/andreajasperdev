import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </header>
        
    )
}