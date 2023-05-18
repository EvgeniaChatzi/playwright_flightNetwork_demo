const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const {
  FlightNetworkStartPage,
} = require("../../page_objects/FNStartPageObject");
const playwright = require("@playwright/test");
const {
  FlightNetworkFlightsPage,
} = require("../../page_objects/FNFlightsPage");

Given(
  "I navigate to {string} website",
  { timeout: 100000 },
  async function (url) {
    await this.page.goto(url);
  }
);

When("I can see the logo of the site", async function () {
  const flightNetworkStartPage = new FlightNetworkStartPage(this.page);
  await expect(flightNetworkStartPage.logoLocator).toBeVisible();
});

When(
  "I select an item {string} from the dropdown with label {string}",
  async function (item, name) {
    const flightNetworkStartPage = new FlightNetworkStartPage(this.page);
    const dropdownFieldByLabelName =
      flightNetworkStartPage.getDropdownByLabelName(name);

    await dropdownFieldByLabelName.click();
    await dropdownFieldByLabelName.type(item);
    await flightNetworkStartPage.dropdownItemLocator.nth(0).click();
  }
);

When(
  "I select {string} and {string} as departure and return dates for the next month",
  async function (departure, returnDate) {
    const flightNetworkStartPage = new FlightNetworkStartPage(this.page);
    const d = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let name = months[d.getMonth() + 1];
    console.log("************", name);

    await flightNetworkStartPage.departureInputLocator.click();
    await flightNetworkStartPage.forwardButtonLocator.click();
    const dateText = await this.page
      .locator(".DayPicker-Caption div")
      .textContent();

    if (await dateText.includes(name)) {
      await await flightNetworkStartPage.getElementByText(departure).click();
      await flightNetworkStartPage.getElementByText(returnDate).click();
    }
  }
);

When("I open the {string} dropdown", async function (name) {
  const flightNetworkStartPage = new FlightNetworkStartPage(this.page);
  await flightNetworkStartPage.getdropdownByName(name).click();
});

When("I add 1 item to the section with index {int}", async function (index) {
  const flightNetworkStartPage = new FlightNetworkStartPage(this.page);
  const options = flightNetworkStartPage.dropdownItemLocator;

  await options
    .nth(index)
    .locator("[data-testid='counter-adults-plus-button']")
    .click();
});

When("I click the Search Flights button", async function () {
  const flightNetworkStartPage = new FlightNetworkStartPage(this.page);
  await flightNetworkStartPage.searchFlightsButtonLocator.click();
});

Then(
  "I can see the results being loaded",
  { timeout: 100000 },
  async function () {
    const flightNetworkFlightsPage = new FlightNetworkFlightsPage(this.page);
    await flightNetworkFlightsPage.pageResultsLocator.waitFor();
  }
);

When("I click on Filters button", async function () {
  const flightNetworkFlightsPage = new FlightNetworkFlightsPage(this.page);
  await flightNetworkFlightsPage.filtersButtonLocator.click();
});

When("I click on {string} button", async function (text) {
  const flightNetworkStartPage = new FlightNetworkStartPage(this.page);
  await flightNetworkStartPage.getElementByText(text).click();
});

When("I check the filter {string}", async function (text) {
  const flightNetworkStartPage = new FlightNetworkStartPage(this.page);
  const generic = this.page.locator(".css-swohae.epwz15m3");

  for (let i = 0; i < (await generic.count()); i++) {
    if ((await generic.nth(i).locator("label").textContent()) === text) {
      await generic.nth(i).locator("[type = 'checkbox']").check();
    }
  }
});

When(
  "I can see Airline filter {string} is being applied",
  async function (filter) {
    const flightNetworkFlightsPage = new FlightNetworkFlightsPage(this.page);
    const flightDetail = await flightNetworkFlightsPage.flightContentWrapper;
    const airlineElement = await flightDetail.locator(`text=${filter}`);
    console.log(await flightDetail.count(), "<<<<<<<<<<<<<<<<<<<<<<<");
    console.log(await airlineElement.count(), "<<<<<<<<<<<<<<<<<<<<<<<");

    expect((await flightDetail.count()) * 2).toBe(await airlineElement.count());
  }
);
