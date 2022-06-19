import { getByText, render } from '@testing-library/react';
import { Home } from './components/Home/Home';

describe('Home Component', () => {
    it('must be able to search for books', () => {
        const {getByText} = render(<Home />)
    
        const searchButton = getByText('Carregar');
    })
});

