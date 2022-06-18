import React from 'react';
import { useDescriptionContext } from "../../context/contextDescription";

export const Description = () => {

    const { selectedBook } = useDescriptionContext();

    if (selectedBook) { console.log(selectedBook); }

    return (
        <div>
            <p>{selectedBook&&selectedBook.volumeInfo.authors}</p>
        </div>
    )

}