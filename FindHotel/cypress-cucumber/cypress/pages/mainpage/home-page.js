const DESTINATION = '[data-id="DestinationInput"]';
const SEARCH = '[data-test-id="SearchButton"]';
const SEARCH_RESULTS = '[data-test-id="ExpandableHotelCard"]';
const STAR_RATINGS_FILTER = "//span[contains(text(),'Star Rating')]";
const GUEST_RATINGS_FILTER = "//span[contains(text(),'Guest Rating')]";
const NIGHTLY_PRICE_FILTER = "//span[contains(text(),'Nightly price')]";
const PROPERTY_TYPE_FILTER = "//span[contains(text(),'Property Type')]";
const APPLY_BUTTON = "//button/span[contains(text(), 'Apply')]";
const CHECKIN_DATE = Cypress.moment().add(1, 'day').format('DD');
const CHECKOUT_DATE = Cypress.moment().add(4, 'day').format('DD');
const RATINGS_VALUE = '[itemprop="ratingValue"]';

require('cypress-plugin-tab')
require('cypress-xpath')

class HomePage {
  static visit() {
    cy.visit('https://re-search-qa-33cc7425.shared-prod.fih.io/')
  }

  static search(destination) {
    cy.get(DESTINATION).type(destination).tab();
    // it gests todays date and adds 1 day for the checkin date
    cy.contains(CHECKIN_DATE).click()
    //it gests todays date and adds 4 day for the checkout date to have a gap of 3 days between the checkin and the checkout date
    cy.contains(CHECKOUT_DATE).click()
    cy.get(SEARCH).click()
  }

  static starRating(star) {
    cy.xpath(STAR_RATINGS_FILTER).click()
    cy.xpath("//button/span[contains(text(), '"+star+"')]").click()
    cy.xpath(APPLY_BUTTON).click()
  }

  static verifyMessage() {
    // verify the search results
    cy.get(SEARCH_RESULTS)
    // verify the star rating filter is present
    cy.xpath(STAR_RATINGS_FILTER)
    // verify the guest rating filter is present
    cy.xpath(GUEST_RATINGS_FILTER)
    // verify the nightly price filter is present
    cy.xpath(NIGHTLY_PRICE_FILTER)
    // verify the property type filter is present
    cy.xpath(PROPERTY_TYPE_FILTER)
  }

  static verifyRating() {
    cy.get(RATINGS_VALUE)
  }

}

export default HomePage;
