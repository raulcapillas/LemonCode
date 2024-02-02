import { MemberEntity, MemberDetailEntity } from "@/types";
import moment from "moment";

export const getCompanyMembers = {
  async get(company: string): Promise<MemberEntity[]> {
    const members = await fetch(
      `https://api.github.com/orgs/${company}/members`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
    return members;
  },
};

export const getMemberDetail = {
  async get(login: string): Promise<MemberDetailEntity> {
    const user = await fetch(`https://api.github.com/users/${login}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
    return {
      ...user,
      created_at: moment(String(user.created_at)).format("DD/MM/YYYY hh:mm"),
      updated_at: moment(String(user.updated_at)).format("DD/MM/YYYY hh:mm"),
    };
  },
};
