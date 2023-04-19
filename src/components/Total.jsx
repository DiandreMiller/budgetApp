import { useState, useEffect } from "react"
import axios from "axios"

const Total = () => {
    const [total, setTotal] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/budget`)
            .then(response => {
                setTotal(response.data)
                console.log(response.data)
            })
    }, [])

    const values = total.map(item => Number(item.amount));
    const sum = values.reduce((a, b) => a + b, 0);

    return (
        <div>

            <h1>${sum.toLocaleString()}</h1>
            
        </div>
    )
}

export default Total
