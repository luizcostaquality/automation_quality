Feature: Signup

 Scenario: Fill the inputs email and password
        Given I access page
        When I fill the inputs from signup option
            And I click on Signup button
        Then I am redirect to form page
