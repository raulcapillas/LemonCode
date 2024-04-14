import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./routes";
import { CharacterCollectionScene, CharacterScene } from "scenes";

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.charectersCollection}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.character} element={<CharacterScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.charectersCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
