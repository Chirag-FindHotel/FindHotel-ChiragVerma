Feature: Unsuccessful signup feature
  @e2e-test
  Scenario: User cannot sign up with a invalid user name or password
    Given I am on the sign up page
    When I sign in as chirag and Typeform2017@
    Then I should a error Please include an @ in the email address.

  Scenario: User cannot sign up with a invalid user name or password
    Given I am on the sign up page
    When I sign in as chirag@ and Typeform2017
    Then I should a error Please enter a part following '@'

  Scenario: User cannot sign up with a invalid user name or password
    Given I am on the sign up page
    When I sign in as chirag@gmail and Typeform2017
    Then I should see a error Invalid