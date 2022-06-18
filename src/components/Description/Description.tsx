import React from 'react';
import { useDescriptionContext } from "../../context/contextDescription";

export const Description = () => {

    const { selectedBook } = useDescriptionContext();

    if (selectedBook) { console.log(selectedBook); }

    return (
        <div>
             <p>{selectedBook&&selectedBook.volumeInfo.title}</p>
             <p>{selectedBook&&selectedBook.volumeInfo.subtitle}</p>
            <p>{selectedBook&&selectedBook.volumeInfo.authors}</p>
            <p>{selectedBook&&selectedBook.volumeInfo.publisher}</p>
            <p>{selectedBook&&selectedBook.volumeInfo.publishedDate}</p>
            <p>{selectedBook&&selectedBook.volumeInfo.description}</p>
            <p>{selectedBook&&selectedBook.volumeInfo.industryIdentifiers.identifier}</p>
            <p>{selectedBook&&selectedBook.volumeInfo.industryIdentifiers.type}</p>
        </div>
    )

}