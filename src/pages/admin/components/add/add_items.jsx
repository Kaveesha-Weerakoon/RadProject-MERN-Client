import { GridColDef } from "@mui/x-data-grid";
import "./add.css";
import axios from 'axios';
import { useState } from 'react';

const AddI = ({slug, setOpen, fetchuser,userid}) => {

  const [title,setTile]=useState("");
  const [imageurl,setimgURL]=useState("");
  const [noinstock,setNoinStock]=useState(0);
  const [category,setCategory]=useState("");
  const [itemcost,setcost]=useState("");
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const hello = await axios.post(`http://localhost:3001/Products/register/`,{title,imageurl,noinstock,category,itemcost});
        alert("Worker Updated Successfully");
        fetchuser();
    }
    catch (error) {
        alert("Error Occured");

    }
    setOpen(false)
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
      close
        </span>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
              <div className="item">
                <label>Title</label>
                <input type="String" required={true} min={5} max={255} placeholder="Name"onChange={(event) => { setTile(event.target.value) }} />
              </div>
              <div className="item">
                <label>Image URL</label>
                <input type="String" min={5}  max={255}placeholder="NIC"onChange={(event) => { setimgURL(event.target.value) }} />
              </div>
              <div className="item">
                <label>Number in Stock</label>
                <input type="Address" required={true} min={5} max={255} placeholder="Name"onChange={(event) => { setNoinStock(event.target.value) }} />
              </div>
              <div className="item">
                <label>Category</label>
                <input type="Number" required={true} min={5} max={255} placeholder="Number"onChange={(event) => { setCategory(event.target.value) }} />
              </div>
              <div className="item">
                <label>Item Cost</label>
                <input type="Number" required={true} min={5} max={255} placeholder="Number"onChange={(event) => { setcost(event.target.value) }} />
              </div>
  
          <button type='submit'>ADD</button>
        </form>
      </div>
    </div>
  );
};

export default AddI;