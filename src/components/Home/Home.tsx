import React from "react";
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';

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
        <div>

            <form onSubmit={formik.handleSubmit}>

                <TextField variant="outlined" label="Digite o termo de Pesquisa" />

                <Button variant="contained">Carregar</Button>
            </form>

        </div>
    )
}