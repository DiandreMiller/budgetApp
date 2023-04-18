//All pages should include the same navigation bar, which includes the name of the 
//application and a button to create a new resource.
//have button that says the word 'new'
//call this inside of navbar

import { useNavigate} from "react-router-dom"


const NewItem = () => {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/budget/new')
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>

                

                <button>New</button>

            </form>
        </div>
    )

}

export default NewItem