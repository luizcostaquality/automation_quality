Feature: Login

    Scenario: Login with email and password incorrect
        Given I access homepage
        When I access the login option
            And I insert data incorrects
            And I click the login button
        Then a error message is displayed
