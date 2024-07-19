Feature: User Login

  Scenario: User logs in successfully
    Given the user is on the login page
    When the user enters "ipgautomotive" in the username field
    And the user enters "carmaker" in the password field
    And the user clicks on the "login" button
    Then the user should be taken to the weather page
    And the welcome message should include "ipgautomotive"

  Scenario: User enters incorrect credentials
    Given the user is on the login page
    When the user enters "wronguser" in the username field
    And the user enters "wrongpass" in the password field
    And the user clicks on the "login" button
    Then the user should see an error message "Invalid username or password"
