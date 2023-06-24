import {Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('I visit the login page', () => {
    cy.visit('https://www.saucedemo.com/')
});

When('I enter valid username and password', () => {
    cy.get('input[id="user-name').type("standard_user")
    cy.get('input[id="password"]').type("secret_sauce")
});

And('clicks on the login button', () => {
    cy.get('input[id="login-button"').click()
});

Then('I see products page', () => {
    cy.get('span[class="title"]').should('have.text', 'Products')
});

