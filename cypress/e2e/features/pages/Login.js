import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the login page", () => {
    cy.visit("https://www.saucedemo.com/");
})

When("I type a registered my username and password", () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})

Then("I have a successful login", () => {
    cy.get('.title')
})