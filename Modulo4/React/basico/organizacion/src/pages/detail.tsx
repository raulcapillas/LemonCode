import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createDefaultMemberDetail } from "../constants/constants";
import { MemberDetailEntity } from "../constants/interfaces";


export const DetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={'..'}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}>Back to list page</Link>
    </>
  );
};
