///<reference types = "cypress" />
import login from "../../support/PageObjects_/login";
describe("Login Functionality", () => {
    

        it('should visit the OrangeHRM website', () => {
            cy.fixture('login').then((data) => {
        this.data = data;
            cy.visit('https://opensource-demo.orangehrmlive.com/');
        });

        it('Login valid user details', () => {
            cy.fixture('login').then((data) => {
        global.data = data;
            login.login(data.validUser.username, data.validUser.password);
            cy.url().should('include', '/dashboard');
        });

    });
});
});