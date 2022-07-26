import login from "../pages/LoginPage"


describe('product page', ()=> {

    beforeEach(function () {

        cy.visit('lojinha-web/v2/')

    })

    it('adicionar produto', ()=> {
        login.go('admin', 'admin')
        login.submit()
        cy.contains('div a[href]', 'Adicionar produto').click()
        cy.contains('div h4', 'Adicionar produto').should('be.visible')
        cy.get('div #produtonome').type('Teclado Sharkoon')
        cy.get('div #produtovalor').type('22300')
        cy.get('div #produtocores').type('vermelho, azul, preto')
        cy.contains('div button', 'Salvar').click()
        login.msgToast('Produto adicionado com sucesso')
        cy.contains('div h4', 'Editar produto').should('be.visible')
 
    })

})