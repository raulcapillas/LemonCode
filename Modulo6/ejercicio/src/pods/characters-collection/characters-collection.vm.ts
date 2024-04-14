export interface CharactersEntityVm {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
  url: string;
  created: Date;
}

export interface CharactersCollectionVm {
  count: number;
  pages: number;
  next: string;
  prev: string;
  charactersList: CharactersEntityVm[];
}