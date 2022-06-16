import React from "react";
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { Container, ContainerFormulario, ContainerBotao } from "../../styles/Home";


type Props = {
    onSubmit: (values: { search: string }) => void
}

export const Home = (props: Props) => {

    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: props.onSubmit
    });

    return (
        <Container>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <ContainerFormulario>
                        <TextField variant="outlined" label="Digite o termo de Pesquisa" />

                        <ContainerBotao>
                            <Button variant="contained">
                                Carregar
                            </Button>
                        </ContainerBotao>
                    </ContainerFormulario>
                </form>
            </div>
        </Container>
    )
}