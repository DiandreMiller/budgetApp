import NewItem from "../components/NewItem"
import ViewAllButton from "../components/ViewAllButton"
import Total from "../components/Total"
import './NavBar.css';





const NavBar = () => {
    return (
        <nav className="flex">
                     <h1><Total/></h1> 
            <ul>
                <li><ViewAllButton/></li>
                <li><NewItem /></li>
            </ul>
        </nav>
    )
}

export default NavBar