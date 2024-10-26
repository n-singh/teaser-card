export interface Article {
    id: number;
    title: string;
    image: Image;
    rating: Rating;
}

export interface Image {
    link: Link;
}

export interface Link {
    url: string;
}

export interface Rating {
    score: number;
}