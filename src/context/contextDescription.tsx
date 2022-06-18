import React, { ReactNode, useContext, useState } from 'react';
import { Livro } from '../types/Livro';

const ContextDescription = React.createContext<{ selectedBook?: Livro, handleSelectedBook?: React.Dispatch<React.SetStateAction<Livro>> | any }>({ selectedBook: { volumeInfo: { authors: [''], description: '', industryIdentifiers: { identifier: '', type: '' }, publishedDate: '', publisher: '', subtitle: '', title: '' }, }});

interface ChildrenProps {
    children: ReactNode
}

export const ContextDescriptionProvider = ({ children }: ChildrenProps) => {

    const [selectedBook, setSelectedBook] = useState<Livro>();

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