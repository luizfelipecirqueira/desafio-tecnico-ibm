import React, { ReactNode, useContext, useState } from 'react';
import { Livro } from '../types/Livro';

const inicialBook = { volumeInfo: { authors: [''], imageLinks:{thumbnail: ''}, description: '', publishedDate: '', publisher: '', subtitle: '', title: '' }}
const ContextDescription = React.createContext<{ selectedBook: Livro, setSearchString?: any, searchString?: string,
    handleSelectedBook?: React.Dispatch<React.SetStateAction<Livro>> | any,  }>({selectedBook: inicialBook});

interface ChildrenProps {
    children: ReactNode
}

export const ContextDescriptionProvider = ({ children }: ChildrenProps) => {

    const [selectedBook, setSelectedBook] = useState<Livro>(inicialBook);
    const [searchString, setSearchString] = useState<string>('');
    const handleSelectedBook = (book: Livro) => {
        setSelectedBook(book);
    }
    return (
        <ContextDescription.Provider value={{
            selectedBook,
            handleSelectedBook,
            setSearchString,
            searchString
        }}>
            {children}
        </ContextDescription.Provider>

    )
}

export const useDescriptionContext = () => useContext(ContextDescription);