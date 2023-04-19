import { useNavigate, useParams } from "react-router-dom"



const EditButton = () => {

    // const {id} = useParams()

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // navigate(`/budget/${id}/edit`)
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