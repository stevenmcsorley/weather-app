import { When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../types";
import assert from "assert";

When(
  "the user enters {string} in the add city field",
  async function (this: OurWorld, city: string) {
    await this.page.fill('[data-testid="add-city-input"]', city);
  }
);

Then("the add city button should be visible", async function (this: OurWorld) {
  const button = await this.page.waitForSelector(
    '[data-testid="add-city-button"]',
    {
      state: "visible",
      timeout: 5000,
    }
  );
  assert(button !== null, "Add city button is not visible");
});

When("the user clicks on the add city button", async function (this: OurWorld) {
  await this.page.click('[data-testid="add-city-button"]');
});

Then(
  "the weather information for {string} should be displayed",
  async function (this: OurWorld, city: string) {
    await this.page.waitForSelector(`[data-testid="city-name-${city}"]`, {
      timeout: 60000,
    });

    const cityName = await this.page.textContent(
      `[data-testid="city-name-${city}"]`
    );
    assert.strictEqual(
      cityName,
      city,
      `City name mismatch. Expected: ${city}, Actual: ${cityName}`
    );

    const temperatureElement = await this.page.waitForSelector(
      '[data-testid="temperature"]',
      { timeout: 5000 }
    );
    assert(temperatureElement !== null, "Temperature element not found");

    const conditionElement = await this.page.waitForSelector(
      '[data-testid="condition-text"]',
      { timeout: 5000 }
    );
    assert(conditionElement !== null, "Weather condition element not found");
  }
);

When(
  "the user deletes the city {string}",
  async function (this: OurWorld, city: string) {
    await this.page.click(`[data-testid="delete-city-${city}"]`);
    await this.page.waitForSelector(`[data-testid="city-name-${city}"]`, {
      state: "detached",
      timeout: 30000,
    });
  }
);

Then(
  "the weather information for {string} should not be displayed",
  async function (this: OurWorld, city: string) {
    const cityName = await this.page.$(`[data-testid="city-name-${city}"]`);
    assert.strictEqual(
      cityName,
      null,
      `City ${city} is still displayed but should have been deleted.`
    );
  }
);

When("the user adds 5 cities", async function (this: OurWorld) {
  const cities = ["London", "Paris", "New York", "Tokyo", "Sydney"];
  for (const city of cities) {
    await this.page.fill('[data-testid="add-city-input"]', city);
    await this.page.click('[data-testid="add-city-button"]');
    await this.page.waitForSelector(`[data-testid="city-name-${city}"]`, {
      timeout: 60000,
    });
  }
});

Then(
  "there should be {int} cities displayed",
  async function (this: OurWorld, count: number) {
    const cityCount = await this.page.$$eval(
      '[data-testid^="city-name-"]',
      (elements) => elements.length
    );
    console.log(`Current number of cities: ${cityCount}`);
    assert.strictEqual(
      cityCount,
      count,
      `Expected ${count} cities, but found ${cityCount}`
    );
  }
);

Then(
  "the weather information for {string} should still be displayed",
  async function (this: OurWorld, city: string) {
    const cityName = await this.page.textContent(
      `[data-testid="city-name-${city}"]`
    );
    assert.strictEqual(
      cityName,
      city,
      `City ${city} should still be displayed but is not.`
    );
  }
);
