import { useNavigate } from "react-router-dom"
import '../pages/FinanceDetail.css'



const EditButton = () => {


    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/budget/viewAllFinances')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <button className='edit-button'>Edit</button>

            </form>
        </div>
    )

}

export default EditButton