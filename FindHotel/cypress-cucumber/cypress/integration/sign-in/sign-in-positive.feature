Feature: Successful login feature
  @e2e-test
  Scenario: User can sign in with a valid user name and password
    Given I am on the sign in page
    When I sign in as email chirag1chirag@gmail.com and password Zidaneforu1@
    Then I should be Successfuly signed in and see the chirag1chirag and signout button on the top right
