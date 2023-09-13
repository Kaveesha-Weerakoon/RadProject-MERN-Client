import DataTable from "../../components/dataTable/dataTable";
import "./workers.css";
import { useState } from "react";
import Add from "../../components/add/add";
import { workers } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 200,
  },
  {
    field: "nic",
    type: "string",
    headerName: "NIC",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Contact Number",
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    width: 200,
    type: "string",
  },
];

const Workers = () => {
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
    <div className="workers">
      <div className="info">
        <h1>Workers</h1>
        <button onClick={() => setOpen(true)}>Add New Worker</button>
      </div>
      <DataTable slug="workers" columns={columns} rows={workers} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="worker" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Workers;
