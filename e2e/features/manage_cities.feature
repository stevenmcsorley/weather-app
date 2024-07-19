Feature: Add and delete cities

  Scenario: Add two cities and delete one
    Given the user is on the login page
    When the user enters "ipgautomotive" in the username field
    And the user enters "carmaker" in the password field
    And the user clicks on the "login" button
    Then the user should be taken to the weather page
    And the welcome message should include "ipgautomotive"

    When the user enters "London" in the manage add city field
    Then the manage add city button should be visible
    And the user clicks on the manage add city button
    Then the manage weather information for "London" should be displayed

    When the user enters "Paris" in the manage add city field
    Then the manage add city button should be visible
    And the user clicks on the manage add city button
    Then the manage weather information for "Paris" should be displayed

    When the user deletes the city "London"
    Then the weather information for "London" should not be displayed
    And the weather information for "Paris" should still be displayed
