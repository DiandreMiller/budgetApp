import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


const EditForm = () => {

    const navigate = useNavigate()
    const [edit, setEdit] = useState({
        id: '',
        itemName: '',
        amount: 0,
        date: '',
        from: '',
        category: ''
    })
    const { id } = useParams()
    


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/budget/${id}`, edit)
            .then((response) => {
                const financeEdit = response.data.filter(item => item.id === id)[0]
                setEdit(financeEdit)
                console.log('is this the correct data?',response.data)
        })
    }, [])


    const handleChange = (e) => {
        setEdit({ ...edit, itemName: e.target.value });
      };
      
    

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/budget/')
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
                 <input type="text" name="date" id="date"
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