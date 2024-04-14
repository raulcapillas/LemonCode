interface CharacterInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

interface CharacterResult {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    },
    location: {
        name: string;
        url: string;
    },
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface CharacterCollection {
    inf: CharacterInfo;
    results: CharacterResult[];
}