import React, { ReactNode, useContext, useState } from 'react';
import { Livro } from '../types/Livro';

const inicialBook = { volumeInfo: { authors: [''], description: '', publishedDate: '', publisher: '', subtitle: '', title: '' }}
const ContextDescription = React.createContext<{ selectedBook: Livro, handleSelectedBook?: React.Dispatch<React.SetStateAction<Livro>> | any }>({selectedBook: inicialBook});

interface ChildrenProps {
    children: ReactNode
}

export const ContextDescriptionProvider = ({ children }: ChildrenProps) => {

    const [selectedBook, setSelectedBook] = useState<Livro>(inicialBook);

    const handleSelectedBook = (book: Livro) => {
        setSelectedBook(book);
    }
    return (
        <ContextDescription.Provider value={{
            selectedBook,
            handleSelectedBook
        }}>
            {children}
        </ContextDescription.Provider>

    )
}

export const useDescriptionContext = () => useContext(ContextDescription);