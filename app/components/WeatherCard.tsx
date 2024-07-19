import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import { WeatherData } from "../types";

interface WeatherCardProps {
  data: WeatherData & { storedName: string };
  onRemove: (city: string) => void;
  isLoading?: boolean;
}

export default function WeatherCard({
  data,
  onRemove,
  isLoading = false,
}: WeatherCardProps) {
  const handleRemove = () => {
    onRemove(data.storedName);
  };

  if (data.error) {
    return (
      <Card
        sx={{
          bgcolor: "rgba(244, 67, 54, 0.1)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          p: 2,
          borderRadius: 4,
          height: "100%",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography>{data.error.message}</Typography>
        <IconButton color="inherit" size="small" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        color: "white",
        borderRadius: 4,
        p: 3,
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "400px",
        maxWidth: "300px",
        margin: "auto",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 6px 40px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "rgba(255, 255, 255, 0.7)",
          "&:hover": { color: "white" },
        }}
        onClick={handleRemove}
      >
        <DeleteIcon />
      </IconButton>

      <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
        {data.location?.name}
      </Typography>

      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src={data.current?.condition.icon}
              alt={data.current?.condition.text}
              style={{ width: "80px", height: "80px" }}
            />
          </Box>

          <Typography
            variant="h2"
            component="div"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
              color: "#4CAF50",
            }}
          >
            {Math.round(data.current?.temp_c || 0)}°
          </Typography>

          <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
            {data.current?.condition.text}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mb: 3,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </Typography>

          <Box sx={{ mt: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AirIcon
                  sx={{
                    mr: 1,
                    fontSize: 24,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                />
                <Typography variant="body1">
                  {data.current?.wind_kph} km/h
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Wind
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <UmbrellaIcon
                  sx={{
                    mr: 1,
                    fontSize: 24,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                />
                <Typography variant="body1">
                  {data.current?.precip_mm}mm
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Precipitation
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <OpacityIcon
                  sx={{
                    mr: 1,
                    fontSize: 24,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                />
                <Typography variant="body1">
                  {data.current?.humidity}%
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Humidity
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Card>
  );
}
