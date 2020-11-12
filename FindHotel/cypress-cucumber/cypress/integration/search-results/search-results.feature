Feature: User searches the deals
  @e2e-test
  Scenario: User searches the deals
    Given I am on search page
    When I type Lisbon as destination
    Then I should see the search result

  Scenario: User searches the deals
    Given I am on search page
    When I type Paris as destination
    Then I should see the search result

  Scenario: User searches the deals
    Given I am on search page
    When I type Barcelona as destination
    Then I should see the search result

   Scenario: User searches the deals
    Given I am on search page
    When I type Ibiza as destination
    Then I should see the search result

