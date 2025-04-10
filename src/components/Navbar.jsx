import { NavLink } from 'react-router';
export const NavBar = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/my-collection">My Collection</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}