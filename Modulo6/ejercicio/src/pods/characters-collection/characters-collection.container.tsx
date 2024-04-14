import React from "react";
import { useCharactersCollection } from "./characters-collection.hook";
import { CharactersCollectionComponent } from "./characters-collection.component";

export const CharactersCollectionContainer: React.FC = () => {
  const { charactersCollection, loadCharactersCollection } =
    useCharactersCollection();

  React.useEffect(() => loadCharactersCollection(), []);

  return (
    <CharactersCollectionComponent
      charactersCollection={charactersCollection}
    />
  );
};
