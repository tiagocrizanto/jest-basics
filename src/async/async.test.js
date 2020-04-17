/// <reference types='jest' />

const asyncFile = require('./async');

describe('Testes assíncronos', () => {
    it('add numbers async', done => {
        asyncFile.addAsync(10, 5, result => {
            expect(result).toBe(15);
            done();
        })
    });

    it('async / await', async () => {
        const value = await Promise.resolve(true);
        expect(value).toBe(true);
    });

    it('should not pass', () => {
        // Não funciona
        // const p = Promise.resolve(false);

        // p.then(value => {
        //   expect(value).toBe(true);
        // })
        const p = Promise.resolve('some value');
        expect(p).resolves.toBe('some value');

    });
});