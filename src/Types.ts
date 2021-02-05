export type AlbumCardContent = {
    id: number,
    media: string,
    category: string,
    heading: string,
    description: string
}

export enum AlbumCardContentCategories {
    RundUmsHaus = "Rund ums Haus",
    Kanalbau = "Kanalbau",
    Außenanlagen = "Außenanlagen",
    Erdarbeiten = "Erdarbeiten"
}
