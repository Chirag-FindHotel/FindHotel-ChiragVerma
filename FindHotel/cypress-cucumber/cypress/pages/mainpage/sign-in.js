const EMAIL_FIELD = '[aria-label="Email"]';
const PASSWORD_FIELD = '[aria-label="Password"]';
const SUBMIT_BUTTON = '[aria-label="Log In"]';
const LOGIN_BUTTON = '[data-test-id="LogInButton"]';
const EMAIL_PLACEHOLDER = 'yours@example.com';


class SignIn {
  static visit() {
    cy.visit('https://re-search-qa-33cc7425.shared-prod.fih.io/')
    cy.get(LOGIN_BUTTON).click();
  }

  static login(email, password) {
    cy.get(EMAIL_FIELD).type(email);
    cy.get(PASSWORD_FIELD).type(password);
    cy.get(SUBMIT_BUTTON).click()
  }

  static verifyMessage(message) {
    cy.contains(message)
  }

}

export default SignIn;
