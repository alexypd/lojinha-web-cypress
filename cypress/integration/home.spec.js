

describe('home page', () => {
    it('App deve estar online', () => {
        cy.visit('lojinha-web/v2/')
        cy.get('div .brand-logo').should('have.text', 'Lojinha')
    })
})