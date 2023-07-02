import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { Members } from "../constants/interfaces";

const columns: GridColDef[] = [
  {
    field: "avatar_url",
    headerName: "Avatar",
    width: 100,
    sortable: false,
    renderCell: (param) => {
      return <Avatar src={param.value} />;
    },
  },
  { field: "id", headerName: "Id", width: 100, sortable: false },
  { field: "login", headerName: "Name", width: 300, sortable: false,  renderCell: (param) => {
    return <Link to={`/detail/${param.value}`}>{param.value}</Link>;
  }, },
];

export const DataGridComponent: React.FC<Members> = ({ members }) => {
  return (
    <>
      <DataGrid
        rows={members}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </>
  );
};
