import React from "react";
import { CharactersTableComponent } from "./components/characters-table.component";
import { useCharacter } from "hooks/character-collection/character-collection.context";
import { useCharactersCollection } from "./character-collection.hook";

export const CharactersCollectionComponent: React.FC = () => {
  const tableRef: React.RefObject<HTMLTableElement> = React.createRef();

  const { setCharactersCollection } = useCharacter();
  const { loadCharactersCollection } = useCharactersCollection(
    setCharactersCollection
  );

  React.useEffect(() => {
    loadCharactersCollection();
  }, []);

  return <CharactersTableComponent tableRef={tableRef} />;
};
