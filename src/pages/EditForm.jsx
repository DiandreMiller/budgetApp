import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';



const EditForm = () => {

    
    const [edit, setEdit] = useState({
        id: uuidv4(),
        itemName: '',
        amount: 0,
        date: '',
        from: '',
        category: ''
    })

    const navigate = useNavigate()
    const { index } = useParams()
    


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/budget/${index}`)
            .then((response) => {
                // const financeEdit = response.data.filter(item => item.id === id)[0]
                setEdit(response.data)
                console.log('is this the correct data?',response.data)
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
        <div>
            <form onSubmit={handleSubmit}>
                <h1>
                    This is the edit form
                </h1>
               
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
                 <input type="text" name="category" id="category"
                    required value={edit.category} onChange={handleChange} />
            </div>
            
                <button>Submit</button>
                
    

            </form>
        </div>
    )

}

export default EditForm