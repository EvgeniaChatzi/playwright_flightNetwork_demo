class FlightNetworkStartPage {
  constructor(page) {
    this.page = page;
    this.logoLocator = page.locator("[data-testid='site-logo']");
    this.dropdownItemLocator = page.locator(
      "[data-testid='etiDropdownOption']"
    );
    this.departureInputLocator = page.locator(
      "[data-testid='singleBound.departureDate-input']"
    );
    this.forwardButtonLocator = page.locator("[aria-label='Next month']");
    this.searchFlightsButtonLocator = page.locator(
      "[data-testid='searchForm-searchFlights-button']"
    );
  }

  getInputFieldByText(name) {
    return this.page.locator(`[placeholder = '${name}']`);
  }

  getCheckboxByName(name) {
    return this.page.locator(`"text=${name}"`);
  }

  getDropdownByLabelName(name) {
    return this.page.locator(`label[title='${name}'] .css-1hwfws3`);
  }

  getElementByText(text) {
    return this.page.getByText(`${text}`, { exact: true });
  }

  getdropdownByName(label) {
    return this.page.locator(`label[title='${label}'] .css-j7qwjs.e15ria0v0`);
  }

  getCounterPlusButtonByLabel(label) {
    return this.page
      .getByText(`${label}`, { exact: true })
      .locator("[data-testid='counter-adults-plus-button']");
  }

  getFiltersResetButtonByText(text) {
    return;
  }
}

module.exports = { FlightNetworkStartPage };
