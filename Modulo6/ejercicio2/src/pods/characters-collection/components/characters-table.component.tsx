import React, { ReactNode } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CharactersEntityVm } from "../characters-collection.vm";
import { Avatar } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
import { useCharacter } from "hooks/character-collection/character-collection.context";

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
  tableRef: React.RefObject<HTMLTableElement>;
}

export const CharactersTableComponent: React.FC<Props> = ({ tableRef }) => {
  const { charactersCollection } = useCharacter();

  const handleRow = (column: Column, row: CharactersEntityVm) => {
    if (column.id === "image") {
      return (
        <Avatar alt={row.name} src={row.image} sx={{ width: 56, height: 56 }} />
      );
    }
    if (column.id === "action") {
      return (
        <Link to={`/character/${row.id}`} target="_blank">
          <InfoOutlinedIcon />
        </Link>
      );
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
            {charactersCollection.count > 0 &&
              charactersCollection.charactersList.map((row) => {
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
    </Paper>
  );
};
