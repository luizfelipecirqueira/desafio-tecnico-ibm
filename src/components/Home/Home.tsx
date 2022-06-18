// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { Carregando, Container, ContainerFormulario, ContainerBotao, ContainerBotaoPage, ContainerInfo, TituloInfo, TextInfo, ContainerTextInfo, ContainterTituloTextInfo } from "../../styles/Home";
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
<<<<<<< HEAD
                        <TextField variant="outlined" label="Digite o termo de Pesquisa" onChange={formik.handleChange} required />
=======
                        <TextField variant="outlined" label="Digite o termo de Pesquisa" id="search" name="search" onChange={formik.handleChange} />
                        <TextInfo>{formik.errors.search ? <div>{formik.errors.search}</div> : null}</TextInfo>
>>>>>>> b2fc6c4f05de47acb9c3600b8f5698aff7c29555
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
                                    <TituloInfo>Autor(es): </TituloInfo><TextInfo>{item.volumeInfo.authors}</TextInfo>
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
                <ContainerBotaoPage>
                    <Button variant="contained" onClick={prevPage}>Prev</Button>
                    <Button variant="contained" onClick={nextPage}>Next</Button>
                </ContainerBotaoPage>
            </div>
        </Container>
    )
}