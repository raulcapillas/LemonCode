import { MemberEntity, MemberDetailEntity } from "@/types";
import moment from "moment";

export const getCompanyMembers = {
  async get(company: string): Promise<MemberEntity[]> {
    const members: MemberEntity[] = await fetch(
      `https://api.github.com/orgs/${company}/members`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
    return members.length > 0 ? members : [];
  },
};

export const getMemberDetail = {
  async get(user: string): Promise<MemberDetailEntity> {
    const member = await fetch(`https://api.github.com/users/${user}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
    return {
      ...member,
      created_at: moment(String(member.created_at)).format("DD/MM/YYYY hh:mm"),
      updated_at: moment(String(member.updated_at)).format("DD/MM/YYYY hh:mm"),
    };
  },
};
