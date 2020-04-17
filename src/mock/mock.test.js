// npm install -D babel-jest @babel/core @babel/preset-env
// npm install axios
// criar o arquivo babel.config.js
import axios from 'axios';
import Users from './users';

//deve ser importado no final da explicação dos 3 itens
jest.mock('axios');

describe('Testes com mock', () => {
    it('Simulando uma função', () => {
        const mockCallback = jest.fn(x => 10 + x);
        [0, 1].forEach(mockCallback);

        // A função deve ser chamada duas vezes
        expect(mockCallback.mock.calls.length).toBe(2);

        // O primeiro argumento da função deve ser 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // O primeiro argumento da segunda chamada deve ser 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);

        // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(10);
    });

    // chamadas de uma função mock
    it('Propriedade mock', () => {
        const mockCallback = jest.fn(x => 10 + x);
        mockCallback();
        mockCallback();
        expect(mockCallback.mock.calls.length).toBe(2);
    });

    it('Injetando valores no mock', () => {
        const filterTestFn = jest.fn();

        // Retorna true na primeira chamada e false na segunda
        filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

        const result = [11, 12].filter(num => filterTestFn(num));

        expect(result.length).toBe(1);
        expect(filterTestFn.mock.calls.length).toBe(2);
    });

    it('mock do axios', () => {
        const users = [{ name: 'Crizanto' }];
        const resp = { data: users };
        axios.get.mockResolvedValue(resp);
        
        return Users.all().then(data => expect(data).toEqual(users));
    });

    // https://github.com/jest-community/vscode-jest
});
