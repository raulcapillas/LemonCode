export interface Character {
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
    scentences: scentence[];
    episode: string[];
    url: string;
    created: string;
}

export interface scentence {
    id: string;
    text: string;
}