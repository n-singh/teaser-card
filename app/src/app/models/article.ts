export interface Article {
    id: number;
    title: string;
    image: Image;
    rating: Rating;
}

interface Image {
    link: Link;
}

interface Link {
    url: string;
}

interface Rating {
    score: number;
}