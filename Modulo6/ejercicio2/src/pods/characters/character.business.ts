import { scentence } from "./api";

export const deleteBestScentencesById = (
  id: string,
  bestScentences: scentence[]
) => {
  return bestScentences.filter((scentence: scentence) => scentence.id !== id);
};
