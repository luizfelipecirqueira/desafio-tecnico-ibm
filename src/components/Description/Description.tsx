import { Button } from '@mui/material';
import React from 'react';
import { useDescriptionContext } from "../../context/contextDescription";
import { ContainerBotao, ContainterTituloTextInfo, TextInfo, TituloInfo } from '../../styles/Home';

export const Description = () => {

    const { selectedBook } = useDescriptionContext();

    if (selectedBook) { console.log(selectedBook); }

    return (
        <div>
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