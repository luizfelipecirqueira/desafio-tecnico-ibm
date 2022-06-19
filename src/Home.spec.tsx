import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { debug } from 'console';
import { Home } from './components/Home/Home';

describe('Home Component', () => {
    it('must be able to search for books', () => {
        const { getByText } = render(<Home />)

        const searchButton = getByText('Carregar');

        debug()

        userEvent.click(searchButton);

        debug()

        expect(getByText('Novo')).toBeInTheDocument()
    })
});

