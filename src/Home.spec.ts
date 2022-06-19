import '@testing-library/jest-dom';
import { Livro } from './types/Livro';

function buscaLivros (param: any) {
    return param('livro');
}

test('Call back', done => {
    const callback = (dados: Livro) => {
        expect(dados).toBe('livro')
        done()
    }

    buscaLivros(callback)
})