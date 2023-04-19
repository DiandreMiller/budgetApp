import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteButton = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_API}/budget/${index}`)
      .then(() => {
        console.log("the delete has worked");
        
        
      })
      .catch((error) => console.log(error));
      navigate("/budget/viewAllFinances");
      
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default DeleteButton;
