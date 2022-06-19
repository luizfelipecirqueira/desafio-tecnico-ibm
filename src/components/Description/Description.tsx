import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDescriptionContext } from "../../context/contextDescription";
import { ContainerIcon, TextInfoDescription, TitleFavorite, TituloInfoDescription } from '../../styles/Description';
import { ContainerBotao, ContainterTituloTextInfo } from '../../styles/Home';
import { Livro } from '../../types/Livro';

export const Description = () => {

    const { selectedBook } = useDescriptionContext();
    const [favorite, setFavorite] = useState(false);


    var storedArray:Livro = JSON.parse(localStorage.getItem("books") || "");
    
    console.log(storedArray);

    useEffect(()=>{
        if(storedArray){
            if(selectedBook.volumeInfo.title === storedArray.volumeInfo.title){
                setFavorite(true);
                console.log(storedArray.volumeInfo.title);
            }
        }
    },[])

    const verifyArrayBooks = () => {
        return null;
    }

    if (selectedBook) { console.log(selectedBook); }

    return (
        <div>
            <TitleFavorite>Clique no botão para favoritar</TitleFavorite>
            <div onClick={() => {setFavorite(!favorite), localStorage.setItem("books",JSON.stringify(selectedBook))}}>
                <ContainerIcon>
                    {favorite === false ? (<AiOutlineHeart size={35} />) : (<AiFillHeart size={35} />)}
                </ContainerIcon>
            </div>
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
                <Button variant="contained" href="/">Voltar</Button>
            </ContainerBotao>
        </div>
    )

}