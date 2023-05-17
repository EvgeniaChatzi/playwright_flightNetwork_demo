Feature: Start Page 

@test
Scenario: Start Page validation and required fields
Given I navigate to "https://www.flightnetwork.com/" website
Then I can see the logo of the site
When I select an item "London Gatwik" from the dropdown with label "From"
And I select an item "Malta" from the dropdown with label "To"
And I select "1" and "15" as departure and return dates for "June 2023"
And I open the "Passengers" dropdown
And I add 1 item to the section with index 0
And I click the Search Flights button
Then I can see the results being loaded
When I click on Filters button
And I click on "Clear all" button
And I check the filter "Easyjet"
And I click on "Done" button
Then I can see Airline filter "Easyjet" is being applied

