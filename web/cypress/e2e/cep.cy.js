
import adress from '../fixtures/cep.json'

describe('CEP', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Integração', 'Consulta de CEP')
    })

    it('Deve validar a consulta de CEP', () => {

        cy.get('#cep').type(adress.cep)
        cy.contains('button', 'Buscar').click()

        cy.get('#street')
            .should('have.value', adress.street)

        cy.get('#neighborhood')
            .should('have.value', adress.neighborhood)

        cy.get('#city')
            .should('have.value', adress.city)

        cy.get('#state')
            .should('have.value', adress.state)
    })
})