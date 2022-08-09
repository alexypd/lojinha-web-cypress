import login from '../pages/LoginPage'

describe('login page', () => {

    beforeEach(function () {

        cy.visit('lojinha-web/v2/')

    })

    it('realizar login', () => {

        login.go('admin', 'admin')
        login.submit()

    })

    it('validar mensagem informando usuario/senha incorretos', () => {

        login.go('admin', 'nimda')
        login.submit()
        login.msgToast('Falha ao fazer o login')

    })

    it('validar mensagem sem informar usuario', () => {

        login.submit()
        login.msgToast('Falha ao fazer o login')

    })

    it('sair e verificar logoff', () => {

        login.go('admin', 'admin')
        login.submit()
        login.logoff()
        cy.contains('div button', 'Entrar').should('be.visible')
    })
})