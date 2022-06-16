export type Livro = {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    title: string;
    subtitle: string,
    authors?: string[],
    publisher: string,
    publishedDate?: string,
    description: string,
    thumbnail?: string,
}