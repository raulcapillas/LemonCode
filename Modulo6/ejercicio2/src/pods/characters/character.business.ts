import { scentences } from "./api";

export const deleteBestScentencesById = (
  id: string,
  bestScentences: scentences[]
) => {
  return bestScentences.filter((scentence: scentences) => scentence.id !== id);
};
