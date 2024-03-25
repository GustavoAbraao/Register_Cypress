import {faker} from '@faker-js/faker'

Cypress.Commands.add('navigateToRegistrationPage', () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.get('a.ico-register').click();
    cy.contains('Register').should('be.visible');
  });

Cypress.Commands.add('fillRegistrationForm', () => {
    cy.get('#gender-male').click();
    cy.get('input[name="FirstName"]').type('John');
    cy.get('input[name="LastName"]').type('Doe');
    cy.get('select[name="DateOfBirthDay"]').select('4').should('have.value', '4');
    cy.get('select[name="DateOfBirthMonth"]').select('February').should('contain', 'February');
    cy.get('select[name="DateOfBirthYear"]').select('1990').should('have.value', '1990');
    cy.get('input[name="Email"]').type(faker.internet.email());
    cy.get('input[name="Password"]').type('Password1');
    cy.get('input[name="ConfirmPassword"]').type('Password1');
  });