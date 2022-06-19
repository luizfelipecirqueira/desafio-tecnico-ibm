import { Button } from '@mui/material';
import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDescriptionContext } from "../../context/contextDescription";
import { ContainerIcon, TitleFavorite } from '../../styles/Description';
import { ContainerBotao, ContainterTituloTextInfo, TextInfo, TituloInfo } from '../../styles/Home';

export const Description = () => {

    const { selectedBook } = useDescriptionContext();
    const [favorite, setFavorite] = useState(false);

    const selectedFavorite = () => {
        let localFavorite = favorite;
        localFavorite = !localFavorite;
        setFavorite(favorite);
    }


    if (selectedBook) { console.log(selectedBook); }

    return (
        <div>
            <TitleFavorite>Clique no botão para favoritar</TitleFavorite>
            <div>
                <ContainerIcon>
                    {favorite === false ? (<AiOutlineHeart size={35} />) : (<AiFillHeart size={35} />)}
                </ContainerIcon>
            </div>
            <ContainterTituloTextInfo>
                <TituloInfo>Título: </TituloInfo><TextInfo>{selectedBook && selectedBook.volumeInfo.title}</TextInfo>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfo>Subtitulo: </TituloInfo> <TextInfo>{selectedBook && selectedBook.volumeInfo.subtitle}</TextInfo>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfo>Autores: </TituloInfo><TextInfo>{selectedBook && selectedBook.volumeInfo.authors}</TextInfo>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfo>Editora: </TituloInfo><TextInfo>{selectedBook && selectedBook.volumeInfo.publisher}</TextInfo>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfo>Data da publicação: </TituloInfo><TextInfo>{selectedBook && selectedBook.volumeInfo.publishedDate}</TextInfo>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfo>Descrição: </TituloInfo><TextInfo>{selectedBook && selectedBook.volumeInfo.description}</TextInfo>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfo>Identificador: </TituloInfo><TextInfo>{selectedBook && selectedBook.volumeInfo.industryIdentifiers.identifier}</TextInfo>
            </ContainterTituloTextInfo>
            <ContainterTituloTextInfo>
                <TituloInfo>Tipo: </TituloInfo><TextInfo>{selectedBook && selectedBook.volumeInfo.industryIdentifiers.type}</TextInfo>
            </ContainterTituloTextInfo>
            <ContainerBotao>
                <Button variant="contained" href="/">Voltar</Button>
            </ContainerBotao>
        </div>
    )

}