import { generatePath } from "react-router";

interface SwitchRoutes {
  root: string;
  charectersCollection: string;
  character: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  charectersCollection: "/characters-collection",
  character: "/character/:id",
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, "character"> {
  character: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  character: (id) => generatePath(switchRoutes.character, { id }),
};
