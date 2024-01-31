import { MemberEntity } from "@/types";

export const getCompanyMembers = {
  async get(company: string): Promise<MemberEntity[]> {
    const companies = await fetch(
      `https://api.github.com/orgs/${company}/members`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
    console.log(companies);
    return companies;
  },
};
