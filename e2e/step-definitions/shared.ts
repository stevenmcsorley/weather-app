import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../types";
import assert from "assert";

Given("the user is on the login page", async function (this: OurWorld) {
  await this.page.goto("http://localhost:3000");
});

When(
  "the user enters {string} in the username field",
  async function (this: OurWorld, username: string) {
    await this.page.fill('[data-testid="username-input"]', username);
  }
);

When(
  "the user enters {string} in the password field",
  async function (this: OurWorld, password: string) {
    await this.page.fill('[data-testid="password-input"]', password);
  }
);

When(
  "the user clicks on the {string} button",
  async function (this: OurWorld, button: string) {
    await this.page.click(`[data-testid="${button}-button"]`);
  }
);

Then(
  "the user should be taken to the weather page",
  async function (this: OurWorld) {
    await this.page.waitForURL("http://localhost:3000/weather");
    const url = this.page.url();
    assert.strictEqual(url, "http://localhost:3000/weather");
  }
);

Then(
  "the welcome message should include {string}",
  async function (this: OurWorld, username: string) {
    const welcomeMessage = (await this.page.textContent(
      '[data-testid="welcome-message"]'
    )) as string;
    assert(welcomeMessage.includes(username));
  }
);
