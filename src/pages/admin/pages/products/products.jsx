import { useState } from "react";
import "./products.css";
import DataTable from "../../components/dataTable/dataTable";
import Add from "../../components/add/add_worker";
import { products } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "price",
    type: "integer",
    headerName: "Price",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "integer",
    width: 130,
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    type: "string",
  }
];

const Products = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;