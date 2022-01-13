import { Given } from "cypress-cucumber-preprocessor/steps";

  const url = 'http://localhost:4000'
  Given('the user is in the homepage', () => {
    cy.visit(url)
  })
  

  When('the button "comentar" is pressed without the required fields',() => {
    cy.get('form button[type="submit"]').click()
  })


  Then('those fields should show the message "Este campo es obligatorio"',() => {
    cy.get('[data-cy="email"] .pristine-error')
      .should('include.text', 'Este campo es requerido')
    cy.get('form .form-group:nth-child(2) .pristine-error')
      .should('include.text', 'Este campo es requerido')
  })