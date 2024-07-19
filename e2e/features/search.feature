Feature: City Search

  Scenario: Search for a city
    Given the user is on the login page
    When the user enters "ipgautomotive" in the username field
    And the user enters "carmaker" in the password field
    And the user clicks on the "login" button
    Then the user should be taken to the weather page
    And the welcome message should include "ipgautomotive"

    When the user enters "London" in the search add city field
    Then the search add city button should be visible
    And the user clicks on the search add city button
    Then the search weather information for "London" should be displayed
