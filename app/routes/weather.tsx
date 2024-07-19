import { json } from "@remix-run/node";
import { useLoaderData, useActionData, useFetcher } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Container, Grid, Typography, Snackbar, Alert } from "@mui/material";
import {
  getUserId,
  fetchWeatherData,
  handleCityUpdate,
} from "../utils/helpers";
import AddCityForm from "../components/AddCityForm";
import WeatherCard from "../components/WeatherCard";
import { WeatherData } from "../types";
import prisma from "~/prismaClient";

type LoaderData = {
  weatherData: (WeatherData & { storedName: string })[];
  userId: string;
  username: string | null;
};

export const loader = async ({ request }) => {
  const userId = await getUserId(request);

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  const username = user ? user.username : null;

  const userCities = await prisma.city.findMany({ where: { userId } });

  const cities = userCities.map((city) => city.name);
  const API_KEY = process.env.WEATHER_API_KEY;
  const weatherData = await fetchWeatherData(cities, API_KEY);

  return json<LoaderData>({ weatherData, userId, username });
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action");
  const city = form.get("city");
  const userId = await getUserId(request);

  const API_KEY = process.env.WEATHER_API_KEY;

  if (action === "add" || action === "remove") {
    return json(await handleCityUpdate(userId, city, API_KEY, action));
  }

  return null;
};

export default function Weather() {
  const { weatherData, userId, username } = useLoaderData<LoaderData>();
  const actionData = useActionData();
  const fetcher = useFetcher();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error" as "error" | "success",
  });
  const [optimisticWeatherData, setOptimisticWeatherData] =
    useState(weatherData);

  useEffect(() => {
    setOptimisticWeatherData(weatherData);
  }, [weatherData]);

  useEffect(() => {
    const handleSnackbar = (message: string, severity: "error" | "success") => {
      setSnackbar({ open: true, message, severity });
    };

    if (actionData?.error || fetcher.data?.error) {
      handleSnackbar(actionData?.error || fetcher.data?.error, "error");
      if (fetcher.formData) {
        const cityToRemove = fetcher.formData.get("city") as string;
        setOptimisticWeatherData((prev) =>
          prev.filter((data) => data.storedName !== cityToRemove)
        );
      }
    } else if (actionData?.success || fetcher.data?.success) {
      handleSnackbar(actionData?.success || fetcher.data?.success, "success");
    }
  }, [actionData, fetcher.data, fetcher.formData]);

  useEffect(() => {
    if (fetcher.state === "submitting") {
      const action = fetcher.formData?.get("_action");
      const city = fetcher.formData?.get("city") as string;
      if (action === "add" && city) {
        setOptimisticWeatherData((prev) => [
          ...prev,
          {
            location: { name: city },
            current: {
              temp_c: 0,
              condition: { text: "Loading...", icon: "" },
              humidity: 0,
              precip_mm: 0,
              wind_kph: 0,
            },
            storedName: city,
          } as WeatherData & { storedName: string },
        ]);
      }
    }
  }, [fetcher.state, fetcher.formData]);

  const handleAddCity = (city: string) =>
    fetcher.submit({ _action: "add", city }, { method: "post" });
  const handleRemoveCity = (cityToRemove: string) => {
    setOptimisticWeatherData((prev) =>
      prev.filter((data) => data.storedName !== cityToRemove)
    );
    fetcher.submit(
      { _action: "remove", city: cityToRemove },
      { method: "post" }
    );
  };
  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 4, bgcolor: "#121212", minHeight: "100vh" }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "white", mb: 4 }}
      >
        Welcome to the weather app, {username || userId}{" "}
        {/* Display username or userId */}
      </Typography>
      <AddCityForm onAddCity={handleAddCity} />
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {optimisticWeatherData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <WeatherCard
              data={data}
              onRemove={handleRemoveCity}
              isLoading={data.current?.condition.text === "Loading..."}
            />
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
