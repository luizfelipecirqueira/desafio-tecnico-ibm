import React from 'react';
import { Home } from './Home';

export const HomeContainer = () => {


    return (
        <Home onSubmit={function (values: { search: string; }): void {
            throw new Error('Function not implemented.');
        } } />
    )
}