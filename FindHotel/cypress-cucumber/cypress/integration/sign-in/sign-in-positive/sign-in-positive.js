import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignIn from '../../../pages/mainpage/sign-in';


Given(/^I am on the sign in page$/, () => {
  SignIn.visit();
});

When(/^I sign in as email (.*) and password (.*)$/, (email, password) => {
  SignIn.login(email, password);
});

Then(/^I should be Successfuly signed in and see the (.*) and signout button on the top right$/, (Message) => {
  SignIn.verifyMessage(Message);
});