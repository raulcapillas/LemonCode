import React, { FC, useState } from "react";
import { BestScentencesContext } from "./bestScentences.context";

interface Props {
  children: React.ReactNode;
}

export const BestScentencesProvider: FC<Props> = ({ children }) => {
  const [bestScentences, setBestScentences] = useState<string>("");

  return (
    <BestScentencesContext.Provider value={{ bestScentences, setBestScentences }}>
      {children}
    </BestScentencesContext.Provider>
  );
};
