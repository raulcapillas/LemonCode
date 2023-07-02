import React, { useState, useEffect } from "react";
import { DataGridComponent } from "../components/datagrid";
import { NotFoundComponent } from "../components/notFound";
import { MemberEntity } from "../constants/interfaces";
import { getCompanyMembers } from "../services/github";
import { useParams } from "react-router-dom";

export const ListPage: React.FC = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [company, setCompany] = useState<string>("lemoncode");
  const [existCompany, setExistCompany] = useState<boolean>(true);

  useEffect(() => {
    searchingCompany();
  }, []);

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  const searchingCompany = async () => {
    const { exist, cMembers } = await getCompanyMembers(company);
    setExistCompany(exist);
    setMembers(cMembers);
  };

  return (
    <>
      <h1>
        List of <b>{company}</b> members
      </h1>
      <input
        type="text"
        value={company}
        onChange={handleChange}
        className="input"
      />
      <button type="button" className="button" onClick={searchingCompany}>
        ¡Listar!
      </button>
      {existCompany ? (
        <DataGridComponent members={members} />
      ) : (
        <NotFoundComponent />
      )}
    </>
  );
};
