import login from "../pages/LoginPage"
import product from "../pages/ProductPage"


describe('product page', ()=> {

    beforeEach(function () {

        cy.visit('lojinha-web/v2/')
        login.go('admin', 'admin')
        login.submit()

    })

    it('validar tela adicionar produto', ()=>{

        product.submitProduct()

        product.validMsgAddProduct()
        product.validMsgProduct()

    })

    it('adicionar um produto', ()=> {

        product.submitProduct()

        product.addProductName('Teclado Sharkoon')
        product.addProductPrice('22300')
        product.addProductColors('vermelho, azul, preto')

        product.saveProduct()

        login.msgToast('Produto adicionado com sucesso')

        product.validMsgEditProduct()
 
    })

})