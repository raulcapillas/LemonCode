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
