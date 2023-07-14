export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export interface Members {
  members: MemberEntity[];
}

export interface ListProperty {
  exist: boolean;
  cMembers: MemberEntity[];
}

export interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}
