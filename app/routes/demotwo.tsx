import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import fs from "fs/promises";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function action({ request }) {
  await fakeDelay(1000);

  return json({ success: true });
}

function fakeDelay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function Demo() {
  const data = useActionData();
  console.log("actiondata", data?.success);
  return (
    <div>
      <h1>HTML Form</h1>
      <form method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
      <h1>Remix Form</h1>
      <Form method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
