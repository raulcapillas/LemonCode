import React from "react";
import { CharactersTableComponent } from "./components/characters-table.component";
import { CharactersFilterContainer } from "./components/characters-filter.component";
import { useCharacter } from "hooks/character-collection/character-collection.context";
import { Divider } from "@mui/material";
import { useCharactersCollection } from "./character-collection.hook";

export const CharactersCollectionComponent: React.FC = () => {
  const tableRef: React.RefObject<HTMLTableElement> = React.createRef();
  const [page, setPage] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("");

  const { setCharactersCollection } = useCharacter();
  const { loadCharactersCollection } = useCharactersCollection(
    setCharactersCollection
  );

  React.useEffect(() => {
    const startPage: number = name === "" ? 1 : page + 1;
    loadCharactersCollection({ page: startPage, name });
  }, [page, name]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    tableRef.current?.scrollIntoView(); // Go to the top of the table
  };

  return (
    <>
      <CharactersFilterContainer name={name} setName={setName} />
      <Divider>&nbsp;</Divider>
      <CharactersTableComponent
        handleChangePage={handleChangePage}
        page={page}
        tableRef={tableRef}
      />
    </>
  );
};
