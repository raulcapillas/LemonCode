import React, { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { CharactersCollectionVm } from "../characters-collection.vm";
import { Avatar } from "@mui/material";
import { useCharactersCollection } from "../characters-collection.hook";

interface Column {
  id: "name" | "status" | "gender" | "image";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: string, name: string) => ReactNode;
}

const format = (value: string, name: string) => {
  if (value) {
    return <Avatar alt={name} src={value} sx={{ width: 56, height: 56 }} />;
  }
};

const columns: readonly Column[] = [
  { id: "image", label: "Picture", minWidth: 100, format },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "gender", label: "Gender", minWidth: 100 },
];

interface Props {
  character: CharactersCollectionVm;
  handleChangePage: (event: unknown, newPage: number) => void;
  page: number;
}

export const CharactersTableComponent: React.FC<Props> = ({
  character,
  handleChangePage,
  page,
}) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format
                            ? column.format(value, row.name)
                            : value}
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
