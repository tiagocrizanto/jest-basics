/// <reference types="jest" />

const student = require('./student'); // ES5

describe ('Teste para alunos', () => {
    it('Deve retornar dez quando as notas forem 5, 3 e 2', () => {
        const notes = [5, 3, 2];
        expect(student.sum(notes)).toEqual(10);
    });

    it('Deve retornar zero quando uma das notas for zero', () => {
        const notes = [1, 2, 3, 0];
        expect(student.sum(notes)).toEqual(0);
    });

    it('Retorna aprovado média maior que seis', () => {
        const notes = [8, 9, 5, 7, 8];

        expect(student.average(notes)).toEqual('aprovado');
    });
	
	it('Retorna aprovado média maior que seis', () => {
        const notes = [8, 5, 5, 6, 5];

        expect(student.average(notes)).toEqual('reprovado');
    });
});
