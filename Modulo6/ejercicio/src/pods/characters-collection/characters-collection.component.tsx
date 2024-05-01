import React from "react";
import { CharactersTableComponent } from "./components/characters-table.component";
import { CharactersFilterContainer } from "./components/characters-filter.component";
import { useCharacter } from "../../hooks/character.context";
import { CharacterCollection, getCharactersCollection } from "./api";
import { mapFromApiToVm } from "./characters-collection.mapper";

export const CharactersCollectionComponent: React.FC = () => {
  const tableRef: React.RefObject<HTMLTableElement> = React.createRef();
  const [page, setPage] = React.useState<number>(0);

  const { setCharactersCollection } = useCharacter();

  React.useEffect(() => {
    getCharactersCollection(page + 1)
      .then((data: CharacterCollection) => {
        setCharactersCollection(mapFromApiToVm(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    tableRef.current?.scrollIntoView(); // Go to the top of the table
  };

  return (
    <>
      <CharactersFilterContainer/>
      <CharactersTableComponent
        handleChangePage={handleChangePage}
        page={page}
        tableRef={tableRef}
      />
    </>
  );
};
