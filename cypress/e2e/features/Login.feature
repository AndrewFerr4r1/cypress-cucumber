Feature: Login

Scenario: Valid login
Given I'm on the login page
When I type a registered my username and password
Then I have a successful login