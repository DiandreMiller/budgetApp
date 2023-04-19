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
    }, [total])

    const values = total.map(item => Number(item.amount));
    const sum = values.reduce((a, b) => a + b, 0);

    let color;
    if (sum > 100) {
        color = "green";
        } else if (sum > 0) {
        color = "orange";
        } else {
        color = "red";
    }


    return (
        <div>

            <h1 style={{ color }}>Back Account Total: ${sum.toLocaleString()}</h1>
            
        </div>
    )
}

export default Total
