import React, { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  CharactersCollectionVm,
  CharactersEntityVm,
} from "../characters-collection.vm";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

interface Column {
  id: "name" | "status" | "gender" | "image" | "action";
  label: string;
  minWidth?: number;
  align?: "right";
  action?: (
    action: "avatar" | "detail",
    value: string,
    name: string
  ) => ReactNode;
}

const action = (value: string, name: string) => {
  return <Avatar alt={name} src={value} sx={{ width: 56, height: 56 }} />;
};

const columns: readonly Column[] = [
  { id: "image", label: "Picture", minWidth: 100, action },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "gender", label: "Gender", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 50, action },
];

interface Props {
  character: CharactersCollectionVm;
  handleChangePage: (event: unknown, newPage: number) => void;
  page: number;
  tableRef: React.RefObject<HTMLTableElement>;
}

export const CharactersTableComponent: React.FC<Props> = ({
  character,
  handleChangePage,
  page,
  tableRef,
}) => {
  const handleRow = (column: Column, row: CharactersEntityVm) => {
    if (column.id === "image") {
      return (
        <Avatar alt={row.name} src={row.image} sx={{ width: 56, height: 56 }} />
      );
    }
    if (column.id === "action") {
      return <Link to={row.url}>Detail</Link>;
    }
    return row[column.id];
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table ref={tableRef} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {character.count > 0 &&
              character.charactersList.map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {handleRow(column, row)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={character.count}
        rowsPerPage={character.charactersList.length}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};
