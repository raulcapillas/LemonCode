import axios from "axios";
import { ListProperty } from "../constants/interfaces";

export const getCompanyMembers = (company): Promise<ListProperty> => {
  return axios
    .get(`https://api.github.com/orgs/${company}/members`)
    .then((response) => {
      return { exist: true, cMembers: response.data };
    })
    .catch((error) => {
      console.log(error);
      return { exist: false, cMembers: [] };
    });
};
