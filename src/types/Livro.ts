export type Livro = {
    volumeInfo:{
    title:string,
    subtitle:string,
    authors:string[],
    publisher:string,
    publishedDate:string,
    description:string,
    industryIdentifiers:{
        type:string,
        identifier:string
    }
}
}