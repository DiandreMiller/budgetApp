import { useNavigate} from "react-router-dom"



const EditButton = () => {


    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/budget/viewAllFinances')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <button>Edit</button>

            </form>
        </div>
    )

}

export default EditButton