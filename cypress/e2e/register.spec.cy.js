require('../support/register_commands');

describe('Registro de usuário com sucesso', () => {

  it('Dado que eu esteja na tela de Registro', () => {
    cy.navigateToRegistrationPage();
  })

  it('Quando eu preencho os campos obrigatorios', () => {
    cy.navigateToRegistrationPage();
    cy.fillRegistrationForm();
  })

  it('Então eu clico no botão Register, o registro é feito e aparece uma mensagem de sucesso', () => {
    cy.navigateToRegistrationPage();
    cy.fillRegistrationForm();
    cy.get('button#register-button').click();
    cy.get('div.result').contains('Your registration completed').should('be.visible');

  });
});
describe('Registro de usuário sem sucesso', () => {
  it('Dado que eu esteja na tela de Registro', () => {
    cy.navigateToRegistrationPage();
  })

  it('Quando eu não preencho os campos e clico no botão Register', () => {
    cy.navigateToRegistrationPage();
    cy.get('button#register-button').click();
  })

  it('Então as mensagens de campos obrigatórios são exibidas', () => {
    cy.navigateToRegistrationPage();
    cy.get('button#register-button').click();

    cy.get('#FirstName-error').should('be.visible').and('contain', 'First name is required.');
    cy.get('#LastName-error').should('be.visible').and('contain', 'Last name is required.');
    cy.get('#Email-error').should('be.visible').and('contain', 'Email is required.');
    cy.get('#Password-error').should('be.visible').and('contain', 'Password is required.');
    cy.get('#ConfirmPassword-error').should('be.visible').and('contain', 'Password is required.');


  })

});

