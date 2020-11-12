import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../pages/mainpage/home-page';

Given(/^I am on search page$/, () => {
  HomePage.visit();
});

When(/^I type (.*) as destination$/, (destination) => {
  HomePage.search(destination);
});

Then(/^I should see the search result$/, () => {
  HomePage.verifyMessage();
});

