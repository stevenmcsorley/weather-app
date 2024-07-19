import { json } from "@remix-run/node";
export async function loader() {
  const API = "da72b3d599824099a05123244241607";
  const city = "iiii";
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`
  );
  const data = await response.json();
  return json(data);
}
