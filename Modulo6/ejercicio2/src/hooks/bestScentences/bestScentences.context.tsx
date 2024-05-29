import { createContext, useContext } from "react";

interface BestScentencesContext {
  bestScentences: string;
  setBestScentences: (bs: string) => void;
}

export const BestScentencesContext = createContext<BestScentencesContext>(null);

export const useBestScentences = (): BestScentencesContext => {
  const context = useContext(BestScentencesContext);
  if (!context) {
    throw new Error("useBestScentences must be used within a BestScentencesProvider");
  }

  return context;
};
