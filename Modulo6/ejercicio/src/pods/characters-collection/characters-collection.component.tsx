import React from "react";
import { CharactersTableComponent } from "./components/characters-table.component";
import { useCharactersCollection } from "./characters-collection.hook";

export const CharactersCollectionComponent: React.FC = () => {
  const [page, setPage] = React.useState<number>(0);
  const { charactersCollection, loadCharactersCollection } =
    useCharactersCollection();

  React.useEffect(() => loadCharactersCollection(page + 1), [page]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <CharactersTableComponent
        character={charactersCollection}
        handleChangePage={handleChangePage}
        page={page}
      />
    </>
  );
};
