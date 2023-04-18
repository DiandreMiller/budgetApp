import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import EditButton from "../components/EditButton";

const FinanceDetail = () => {
  const [finance, setFinance] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/budget`)
      .then((response) => {
        const financeItem = response.data.filter(item => item.id === id)[0];
        setFinance(financeItem);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {finance ? (
        <>
          <h1>{finance.itemName}</h1>
          <p>Amount: {finance.amount}</p>
          <p>Date: {finance.date}</p>
          <p>From: {finance.from}</p>
          <p>Category: {finance.category}</p>
          <Link to={`/budget/${id}/edit`}>
            <EditButton />
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FinanceDetail;
