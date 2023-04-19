import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './ViewAllFinances.css'

const ViewAllFinances = () => {
    const [allFinances, setAllFinances] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/budget`)
        .then((response) => setAllFinances(response.data))
    }, [])

    return (
        <div>
            <h1>Here are all your finances</h1> 
            {allFinances.map((finance, index) => {
        return <div className="viewAll" key={index}>
            <Link to={`/budget/finance/${index}`}>
                <h2>Item: {finance.itemName}</h2>
            </Link>
                     <p>Finance: ${finance.amount.toLocaleString()}</p>
                     <p>Date: {finance.date}</p>
                     <p>Finance: {finance.from}</p>
                     <p>Category: {finance.category}</p>
                </div>
            })}
            
        </div>
    )
}

export default ViewAllFinances