# playwright_flightNetwork-demo

# prerequisites :

Node.js

# to install the dependencies:

npm install

# to run the tests:

npx cucumber-js --tags "@test" --exit

# to generate an HTML report:

npx cucumber-js --tags "@test" --exit --format html:cucumber-report.html

(after the test execution, a "cucumber-report.html" file will be generated. To see the report: right click on the file/ copy path/ open it in browser)

# NOTE:

Ideally some data, for example the flights, should be either created on the fly with an API call or they should be pre-created and run on a specific environment that allows this data not to be deleted. In the case of this demo, please make sure that there is actually content loading after searching for flights, otherwise please replace the origin and the destination in the steps-->
When I select "London Gatwik" from the dropdown with label "From"
And I select "Malta" from the dropdown with label "To"
