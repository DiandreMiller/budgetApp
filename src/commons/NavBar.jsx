import NewItem from "../components/NewItem"
import ViewAllButton from "../components/ViewAllButton"
import Total from "../components/Total"



const NavBar = () => {
    return (
        <div>
            <Total/>
            <ViewAllButton/>
            <NewItem />
        </div>
    )
}

export default NavBar