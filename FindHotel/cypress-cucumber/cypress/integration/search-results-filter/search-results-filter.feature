Feature: User searches by rating filter
  @e2e-test
  Scenario: User searches the deals by rating filter
    Given I am on search page
    When I type Lisbon as destination
    When I select 1 star
    Then I should see the star

  Scenario: User searches the deals by rating filter
    Given I am on search page
    When I type Paris as destination
    When I select 3 star
    Then I should see the star

  Scenario: User searches the deals by rating filter
    Given I am on search page
    When I type Barcelona as destination
    When I select 4 star
    Then I should see the star

