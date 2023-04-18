import NewItem from "../components/NewItem"
import EditButton from "../components/EditButton"
import ViewAllButton from "../components/ViewAllButton"



const NavBar = () => {
    return (
        <div>
            <ViewAllButton/>
            <NewItem />
        </div>
    )
}

export default NavBar