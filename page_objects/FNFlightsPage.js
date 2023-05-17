class FlightNetworkFlightsPage {
  constructor(page) {
    this.page = page;
    this.pageResultsLocator = page.locator(
      "[data-testid='resultPage-searchResults']"
    );
    this.filtersButtonLocator = page.locator(
      "[data-testid='resultPage-toggleFiltersButton-button']"
    );
    this.flightContentWrapper = page.locator(".etiContentWrapper.css-15lv83v");
  }
}

module.exports = { FlightNetworkFlightsPage };
