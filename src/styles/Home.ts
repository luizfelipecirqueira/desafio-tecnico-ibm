import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`;

export const ContainerFormulario = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerBotao = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
`;

export const ContainerBotaoPage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 30px;
    justify-content: center;
    align-items: center;
`;

export const ContainerInfo = styled.div`
    display: flex;
    margin: 20px;
`;

export const TextInfo = styled.div`
    font-family: "Work Sans", Sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    line-height: 25px;
    color: #A90139;
    margin: 10px;
`;

export const TituloInfo = styled.div`
font-family: "Work Sans", Sans-serif;
font-size: 18px;
font-weight: bold;
font-style: normal;
line-height: 25px;
color: #A90139;
margin: 10px;
`;

export const ContainerTextInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainterTituloTextInfo = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ImageBooks = styled.div`
    backgroundImage:url(item.volumeInfo.imageLinks.smallThumbnail);
`;

export const Carregando = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Work Sans", Sans-serif;
    font-size: 25px;
    font-weight: bold;
    font-style: normal;
    line-height: 18px;
    color: #A90139;
    margin: 20px;
`;