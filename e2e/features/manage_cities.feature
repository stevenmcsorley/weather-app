Feature: Manage cities

  Scenario: Add cities and delete one, then attempt to add more than 5 cities
    Given the user is on the login page
    When the user enters "ipgautomotive" in the username field
    And the user enters "carmaker" in the password field
    And the user clicks on the "login" button
    Then the user should be taken to the weather page
    And the welcome message should include "ipgautomotive"

    When the user enters "London" in the add city field
    And the user clicks on the add city button
    Then the weather information for "London" should be displayed

    When the user enters "Paris" in the add city field
    And the user clicks on the add city button
    Then the weather information for "Paris" should be displayed

    When the user enters "New York" in the add city field
    And the user clicks on the add city button
    Then the weather information for "New York" should be displayed

    When the user enters "Tokyo" in the add city field
    And the user clicks on the add city button
    Then the weather information for "Tokyo" should be displayed

    When the user enters "Sydney" in the add city field
    And the user clicks on the add city button
    Then the weather information for "Sydney" should be displayed

    When the user deletes the city "London"
    Then the weather information for "London" should not be displayed
    And the weather information for "Paris" should still be displayed
    And the weather information for "New York" should still be displayed
    And the weather information for "Tokyo" should still be displayed
    And the weather information for "Sydney" should still be displayed

    When the user enters "Berlin" in the add city field
    And the user clicks on the add city button
    Then the weather information for "Berlin" should be displayed

    When the user enters "Rome" in the add city field
    And the user clicks on the add city button
    Then there should be 5 cities displayed