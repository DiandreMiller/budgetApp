import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DeleteButton = () => {
    const [deleteButton, setDeleteButton] = useState({})
    const {id} = useParams()
    axios.delete(`${process.env.REACT_APP_BACKEND_API}/${id}`, )
}

export default DeleteButton