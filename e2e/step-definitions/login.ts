import { Then } from "@cucumber/cucumber";
import { OurWorld } from "../types";
import assert from "assert";

Then(
  "the user should see an error message {string}",
  async function (this: OurWorld, errorMessage: string) {
    const errorText = await this.page.textContent(
      '[data-testid="error-message"]'
    );
    assert.strictEqual(errorText, errorMessage);
  }
);
