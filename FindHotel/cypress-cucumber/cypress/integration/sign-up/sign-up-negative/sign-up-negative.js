import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignUp from '../../../pages/mainpage/sign-up';

Given(/^I am on the sign up page$/, () => {
  SignUp.visit();
});

When(/^I sign in as (.*) and (.*)$/, (email , password) => {
  SignUp.registration(email, password);
});

Then(/^I should see a error (.*)$/, (Message) => {
  SignUp.verifyMessage(Message);
});