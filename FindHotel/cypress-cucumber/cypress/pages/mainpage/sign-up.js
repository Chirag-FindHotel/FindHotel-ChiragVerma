const EMAIL_FIELD = '[aria-label="Email"]';
const PASSWORD_FIELD = '[aria-label="Password"]';
const SUBMIT_BUTTON = '[aria-label="Sign Up"]';
const LOGIN_BUTTON = '[data-test-id="LogInButton"]';
const SIGNUP_BUTTON = 'Sign Up';
const EMAIL_PLACEHOLDER = 'yours@example.com';


class SignUp {
  static visit() {
    cy.visit('https://re-search-qa-33cc7425.shared-prod.fih.io/')
    cy.get(LOGIN_BUTTON).click();
    cy.contains(SIGNUP_BUTTON).click()
  }

  static registration(email, password) {
    cy.get(EMAIL_FIELD).type(email);
    cy.get(PASSWORD_FIELD).type(password);
    cy.get(SUBMIT_BUTTON).click()
  }

  static verifyMessage(message) {
    cy.contains(message)
  }

}

export default SignUp;
