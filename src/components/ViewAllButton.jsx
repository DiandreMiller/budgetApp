import { useNavigate } from "react-router-dom"

const ViewAllButton = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/budget/viewAllFinances')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <button>View All Finances</button>

            </form>
        </div>
    )
}

export default ViewAllButton