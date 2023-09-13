import DataTable from "../../components/dataTable/dataTable";
import "./problems.css";
import { useState } from "react";
import { problems } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Contact Number",
    width: 150,
  },
  {
    field: "problems",
    headerName: "Problems",
    width: 450,
    type: "string",
  },
];

const Problems = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="problems">
      <div className="info">
        <h1>Problems</h1>
        
      </div>
      <DataTable slug="problems" columns={columns} rows={problems} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {/* {open && <Add slug="user" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
};

export default Problems;
