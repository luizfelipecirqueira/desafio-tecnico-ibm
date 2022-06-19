import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDescriptionContext } from "../../context/contextDescription";
import { ContainerIcon, TextInfoDescription, TitleFavorite, TituloInfoDescription } from '../../styles/Description';
import { ContainerBotao, ContainterTituloTextInfo } from '../../styles/Home';
import { Livro } from '../../types/Livro';

export const Description = () => {

    const { selectedBook } = useDescriptionContext();
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();


    const storedArray: Livro[] = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books") || "") : [];

    useEffect(() => {
        if (!!storedArray.length) {
            storedArray.map(
                (book: Livro) => {
                    if (book.volumeInfo.title === selectedBook.volumeInfo.title) {
                        setFavorite(true);
                    }
                }
            )
        }

    }, [])

    const verifyArrayBooks = () => {
        const array = []
        array.push(selectedBook);
        if (!storedArray.length) {
            setFavorite(!favorite), localStorage.setItem("books", JSON.stringify(array))
        }
        else {
            storedArray.map(item => {
                if (item.volumeInfo.title === selectedBook.volumeInfo.title) {
                    setFavorite(!favorite);
                    storedArray.splice(storedArray.indexOf(item), 1);
                    localStorage.setItem("books", JSON.stringify([...storedArray]))
                }
                else {
                    setFavorite(!favorite), localStorage.setItem("books", JSON.stringify([...storedArray, selectedBook]))
                }
            })
        }
    }


    return (
        <div>
            <TitleFavorite>Clique no botão para favoritar</TitleFavorite>
            <div onClick={verifyArrayBooks}>
                <ContainerIcon>
                    {favorite === false ? (<AiOutlineHeart size={35} />) : (<AiFillHeart size={35} />)}
                </ContainerIcon>
            </div>

            <img src={selectedBook && selectedBook.volumeInfo.imageLinks.thumbnail} />

            <ContainterTituloTextInfo>
                <TituloInfoDescription>Título: </TituloInfoDescription><TextInfoDescription>{selectedBook && selectedBook.volumeInfo.title}</TextInfoDescription>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfoDescription>Subtitulo: </TituloInfoDescription> <TextInfoDescription>{selectedBook && selectedBook.volumeInfo.subtitle}</TextInfoDescription>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfoDescription>Autores: </TituloInfoDescription><TextInfoDescription>{selectedBook && selectedBook.volumeInfo.authors}</TextInfoDescription>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfoDescription>Editora: </TituloInfoDescription><TextInfoDescription>{selectedBook && selectedBook.volumeInfo.publisher}</TextInfoDescription>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfoDescription>Data da publicação: </TituloInfoDescription><TextInfoDescription>{selectedBook && selectedBook.volumeInfo.publishedDate}</TextInfoDescription>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfoDescription>Descrição: </TituloInfoDescription><TextInfoDescription>{selectedBook && selectedBook.volumeInfo.description}</TextInfoDescription>
            </ContainterTituloTextInfo>
            <ContainerBotao>
                <Button variant="contained" onClick={() => navigate("/")}>Voltar</Button>
            </ContainerBotao>
        </div>
    )

}