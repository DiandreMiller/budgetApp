import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import './FinanceDetail.css'

const FinanceDetail = () => {
  const [finance, setFinance] = useState({});
  const { index } = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_API}/budget/${index}`)
      .then((response) => {
        setFinance(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="individual">
      {finance ? (
        <>
          <h1>{finance.itemName}</h1>
          <p>Amount: ${Number(finance.amount).toLocaleString()}</p>
          <p>Date: {finance.date}</p>
          <p>From: {finance.from}</p>
          <p>Category: {finance.category}</p>
          <Link to={`/budget/${index}/edit`}>
            <EditButton />
          </Link>
          <DeleteButton className='delete-button'/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FinanceDetail;
