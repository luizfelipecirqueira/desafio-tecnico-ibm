// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { Carregando, Container, ContainerFormulario, ContainerBotao, ContainerInfo, TituloInfo, TextInfo, ContainerTextInfo, ContainterTituloTextInfo } from "../../styles/Home";
import { useAxios } from "../../hooks/UseFetch";
import { Livro } from "../../types/Livro";
import { useDescriptionContext } from "../../context/contextDescription";


export const Home = () => {
    const { handleSelectedBook } = useDescriptionContext();
    const { fetchData, loading, response } = useAxios();
    const [page, setPage] = useState(0);
    const [submited, setSubmited] = useState('');
    const navigate = useNavigate();

    const prevPage = () => setPage(
        state => {
            if (page === 0) {
                return page;
            }
            else {
                return state - 1;
            }
        });

    const nextPage = () => setPage(
        state => state + 1
    )

    useEffect(() => {
        submited && fetchData({
            method: "get", url: submited + `?p=${page}`
        });
    }, [page, submited])

    const formik = useFormik({
        validate: values => {
            const errors = {};
            if (!values.search) {
                errors.search = 'Favor Preencher o campo de pesquisa!';
            }
            return errors;
        },
        initialValues: {
            search: '',
        },
        onSubmit: values => {
            setSubmited(values.search);
            setPage(0);
        }
    });

    if (loading) {
        return <Carregando>Carregando...</Carregando>;
    }

    return (
        <Container>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <ContainerFormulario>
                        <TextField variant="outlined" label="Digite o termo de Pesquisa" id="search" name="search" onChange={formik.handleChange} />
                        <TextInfo>{formik.errors.search ? <div>{formik.errors.search}</div> : null}</TextInfo>
                        <ContainerBotao>
                            <Button variant="contained" type="submit">
                                Carregar
                            </Button>
                        </ContainerBotao>
                    </ContainerFormulario>
                </form>
                {response && response.items.map((item: Livro, index) => (

                    <div key={index} onClick={() => { handleSelectedBook(item); navigate("/description") }}>
                        <ContainerInfo>
                            <ContainerTextInfo>
                                <ContainterTituloTextInfo>
                                    <TituloInfo>Título: </TituloInfo><TextInfo>{item.volumeInfo.title}</TextInfo>
                                </ContainterTituloTextInfo>
                                <ContainterTituloTextInfo>
                                    <TituloInfo>Editora: </TituloInfo><TextInfo>{item.volumeInfo.publisher}</TextInfo>
                                </ContainterTituloTextInfo>
                                <ContainterTituloTextInfo>
                                    <TituloInfo>Data da Publicação: </TituloInfo><TextInfo>{item.volumeInfo.publishedDate}</TextInfo>
                                </ContainterTituloTextInfo>
                            </ContainerTextInfo>
                        </ContainerInfo>
                    </div>

                ))
                }
                <ContainerBotao>
                    <Button variant="contained" onClick={prevPage}>Prev</Button>
                    <Button variant="contained" onClick={nextPage}>Next</Button>
                </ContainerBotao>
            </div>
        </Container>
    )
}