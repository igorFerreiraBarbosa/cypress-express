/// <reference types="cypress" />

describe('tarefas', () => {
    it('deve criar uma nova tarefa', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3333/helper/tasks',
            body: {
                name: 'Ler um livro de Node.js'
            }
        }).then((res) => {
            expect(res.status).to.eq(204)
        })

        cy.visit('http://localhost:8080/')

        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro de Node.js')

        cy.contains('button', 'Create').click()

        cy.get('main div p')
            .should('be.visible')
            .should('have.text', 'Ler um livro de Node.js')
        
            cy.contains('main div p', 'Ler um livro de Node.js')
                .should('be.visible')
    });
});