Feature: Signup

 Scenario: Fill the inputs email and password
        Given I access homepage
        When I access the login option
            And I insert data on the inputs fields
        Then They are inserted correctly