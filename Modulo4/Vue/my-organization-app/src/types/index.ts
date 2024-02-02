export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export interface MemberDetailEntity {
  member: MemberEntity;
  name: string;
  company: string;
  email: string;
  bio: string;
  followers: string;
  following: string;
  created_at: string;
  updated_at: string;
}
