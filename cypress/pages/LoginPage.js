

class LoginPage {

    go(usuario, senha){
        
        cy.get("div label[for='usuario']").should('have.text', 'Usuário').type(usuario)
        cy.get("div label[for='senha']").should('have.text', 'Senha').type(senha)

    }

    submit(){

        cy.contains('div button', 'Entrar').click()

    }

    msgToast(msg){

        cy.contains('div .toast', msg).should('be.visible')
        
    }

    logoff(){

        cy.contains('a[href]', 'Sair').click()

    }
}

export default new LoginPage;