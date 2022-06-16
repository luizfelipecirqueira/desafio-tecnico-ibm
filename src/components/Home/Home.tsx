import React from "react";
import { Button, TextField } from '@mui/material';
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
                <TextField />

                <Button>Carregar</Button>
            </form>
        </div>
    )
}