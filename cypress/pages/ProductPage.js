

class ProductPage {

    submitProduct() {

        cy.contains('div a[href]', 'Adicionar produto').click()

    }

    validMsgAddProduct() {

        cy.contains('div h4', 'Adicionar produto').should('be.visible')

    }

    validMsgProduct() {

        const msgAlert = 'Não esqueça de preencher todas as informações do produto para que ele seja mais vendível a seus clientes.'
        cy.contains('div div[class="row"]', msgAlert).should('be.visible')

    }

    validMsgEditProduct() {

        cy.contains('div h4', 'Editar produto').should('be.visible')

    }

    addProductName(productName) {

        cy.get('div #produtonome').type('Teclado Sharkoon')
    }

    addProductPrice(productPrice) {

        cy.get('div #produtovalor').type('22300')
    }

    addProductColors(productColors) {

        cy.get('div #produtocores').type('vermelho, azul, preto')

    }

    saveProduct() {

        cy.contains('div button', 'Salvar').click()

    }

    listProduct() {

        cy.contains('div a', 'Lista de Produtos').click()

    }


}

export default new ProductPage;