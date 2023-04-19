import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import './EditForm.css'


const EditForm = () => {
    
    const [edit, setEdit] = useState({
        id: uuidv4(),
        itemName: '',
        amount: 0,
        date: '',
        from: '',
        category: ''
    })

    const categories = ['Income', 'Entertainment', 'Deposit', 'WithDrawl', 'Pets', 'Food',
        'Transportation', 'Rental', 'Bills', 'Donations', 'Miscellaneous', 'Other']; 
    
    const navigate = useNavigate()
    const { index } = useParams()
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/budget/${index}`)
            .then((response) => {
                setEdit(response.data)
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit({ ...edit, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_BACKEND_API}/budget/${index}`, edit)
            .then((response) => {
                console.log(response.data)
            })  
            .catch(error => console.log(error))
        navigate('/budget/viewAllFinances')
    }

    return (
        <div className="edit">
            <form onSubmit={handleSubmit}>
                <h1>This is the edit form</h1>

                <div>
                    <label>Item</label>
                    <br/>
                    <input type="text" name="itemName" id="itemName"
                        required value={edit.itemName} onChange={handleChange} />
                </div>

                <div>
                    <label>Amount</label>
                    <br/>
                    <input type="number" name="amount" id="amount"
                        required value={edit.amount} onChange={handleChange} />
                </div>
                
                <div>
                    <label>Date</label>
                    <br/>
                    <input type="date" name="date" id="date"
                        required value={edit.date} onChange={handleChange} />
                </div>
                
                <div>
                    <label>From</label>
                    <br/>
                    <input type="text" name="from" id="from"
                        required value={edit.from} onChange={handleChange} />
                </div>
                
                <div>
                    <label>Category</label>
                    <br/>
                    <select name="category" id="category" onChange={handleChange} value={edit.category}>
                        <option value="">Select category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditForm
