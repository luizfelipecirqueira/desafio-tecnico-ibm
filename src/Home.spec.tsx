import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from './components/Home/Home';

describe('Home Component', () => {
    it('must be able to search for books', () => {
        const { getByText } = render(<Home />)

        const searchButton = getByText('Carregar');

        userEvent.click(searchButton);

        expect(getByText('Novo')).toBeInTheDocument()
    })
});

