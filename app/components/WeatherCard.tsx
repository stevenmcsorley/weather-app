import {
  Card,
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

interface WeatherDetailProps {
  Icon: React.ElementType;
  value: string;
  label: string;
  testId: string;
}

// WeatherIcon component
const WeatherIcon = ({ icon, alt }: { icon?: string; alt?: string }) => (
  <Box sx={{ textAlign: "center", mb: 3 }}>
    <img
      src={icon || ""}
      alt={alt || ""}
      style={{ width: "80px", height: "80px" }}
      data-testid="weather-icon"
    />
  </Box>
);

// Temperature component
const Temperature = ({ temp }: { temp?: number }) => (
  <Typography
    variant="h2"
    component="div"
    sx={{
      fontWeight: "bold",
      textAlign: "center",
      mb: 2,
      color: "#4CAF50",
    }}
    data-testid="temperature"
  >
    {Math.round(temp || 0)}°
  </Typography>
);

// WeatherCondition component
const WeatherCondition = ({ condition }: { condition?: string }) => (
  <Typography
    variant="h6"
    sx={{ textAlign: "center", mb: 2 }}
    data-testid="condition-text"
  >
    {condition || "N/A"}
  </Typography>
);

// DateDisplay component
const DateDisplay = () => (
  <Typography
    variant="body2"
    sx={{
      textAlign: "center",
      mb: 3,
      color: "rgba(255, 255, 255, 0.7)",
    }}
    data-testid="date"
  >
    {new Date().toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })}
  </Typography>
);

// WeatherDetail component
const WeatherDetail = ({ Icon, value, label, testId }: WeatherDetailProps) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
    }}
    data-testid={testId}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Icon
        sx={{
          mr: 1,
          fontSize: 24,
          color: "rgba(255, 255, 255, 0.7)",
        }}
      />
      <Typography variant="body1">{value}</Typography>
    </Box>
    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
      {label}
    </Typography>
  </Box>
);

// WeatherDetails component
const WeatherDetails = ({
  wind,
  precip,
  humidity,
}: {
  wind?: number;
  precip?: number;
  humidity?: number;
}) => (
  <Box sx={{ mt: "auto" }}>
    <WeatherDetail
      Icon={AirIcon}
      value={`${wind || 0} km/h`}
      label="Wind"
      testId="wind-info"
    />
    <WeatherDetail
      Icon={UmbrellaIcon}
      value={`${precip || 0}mm`}
      label="Precipitation"
      testId="precip-info"
    />
    <WeatherDetail
      Icon={OpacityIcon}
      value={`${humidity || 0}%`}
      label="Humidity"
      testId="humidity-info"
    />
  </Box>
);

// ErrorCard component
const ErrorCard = ({
  message,
  onRemove,
}: {
  message: string;
  onRemove: () => void;
}) => (
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
    <Typography data-testid="error-message">{message}</Typography>
    <IconButton
      color="inherit"
      size="small"
      onClick={onRemove}
      data-testid="delete-button"
    >
      <DeleteIcon />
    </IconButton>
  </Card>
);

// Main WeatherCard component
export default function WeatherCard({
  data,
  onRemove,
  isLoading = false,
}: WeatherCardProps) {
  const handleRemove = () => onRemove(data.storedName);

  if (data.error) {
    return <ErrorCard message={data.error.message} onRemove={handleRemove} />;
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
      data-testid="weather-card"
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
        data-testid={`delete-city-${data.location?.name}`}
      >
        <DeleteIcon />
      </IconButton>

      <Typography
        variant="h6"
        sx={{ textAlign: "center", mb: 1 }}
        data-testid={`city-name-${data.location?.name}`}
      >
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
          data-testid="loading-spinner"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <WeatherIcon
            icon={data.current?.condition.icon}
            alt={data.current?.condition.text}
          />
          <Temperature temp={data.current?.temp_c} />
          <WeatherCondition condition={data.current?.condition.text} />
          <DateDisplay />
          <WeatherDetails
            wind={data.current?.wind_kph}
            precip={data.current?.precip_mm}
            humidity={data.current?.humidity}
          />
        </>
      )}
    </Card>
  );
}
