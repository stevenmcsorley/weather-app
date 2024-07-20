import { redirect } from "@remix-run/node";
import prisma from "../prismaClient";
import { getSession } from "../sessions";

export async function getUserId(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId) throw redirect("/");
  return userId;
}

export async function fetchWeatherData(cities: string[], apiKey: string) {
  return await Promise.all(
    cities.map((city) => fetchCityWeather(city, apiKey))
  );
}

async function fetchCityWeather(city: string, apiKey: string) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
        city
      )}`
    );
    if (!response.ok)
      throw new Error(`Weather API error: ${response.statusText}`);
    const data = await response.json();
    return { ...data, storedName: city };
  } catch (error) {
    console.error(`Error fetching weather for ${city}:`, error);
    return {
      error: { message: `Unable to fetch weather for ${city}` },
      location: { name: city },
      storedName: city,
    };
  }
}

export async function handleCityUpdate(
  userId: string,
  city: string,
  apiKey: string,
  action: "add" | "remove"
) {
  if (action === "add") {
    return await addCity(userId, city, apiKey);
  } else if (action === "remove") {
    return await removeCity(userId, city);
  }
  return { error: "Invalid action" };
}

async function addCity(userId: string, city: string, apiKey: string) {
  if (!isValidCityName(city)) {
    return { error: "Invalid city name. Please enter a valid city." };
  }

  const cityCount = await getCityCount(userId);
  if (cityCount >= 5) {
    return { error: "You can only add up to 5 cities." };
  }

  if (await cityExists(userId, city)) {
    return { error: `City already exists: ${city}` };
  }

  return await createCity(userId, city, apiKey);
}

function isValidCityName(city: string): boolean {
  return typeof city === "string" && city.length >= 2;
}

async function getCityCount(userId: string): Promise<number> {
  return await prisma.city.count({ where: { userId } });
}

async function cityExists(userId: string, city: string): Promise<boolean> {
  const existingCity = await prisma.city.findFirst({
    where: { userId, name: city },
  });
  return !!existingCity;
}

async function createCity(userId: string, city: string, apiKey: string) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
        city
      )}`
    );
    if (!response.ok) return { error: `Invalid city: ${city}` };

    const data = await response.json();
    const cityName = data.location.name;

    await prisma.city.create({
      data: { userId, name: cityName },
    });

    return { success: `Added city: ${cityName}` };
  } catch (error) {
    if (error instanceof Error) {
      return { error: `Error adding city: ${error.message}` };
    }
    return { error: "An unknown error occurred while adding the city." };
  }
}

async function removeCity(userId: string, city: string) {
  if (typeof city !== "string") {
    return { error: "Invalid city name for removal" };
  }

  const result = await prisma.city.deleteMany({
    where: { userId, name: city },
  });

  if (result.count === 0) return { error: `City not found: ${city}` };

  return { success: `Removed city: ${city}` };
}
