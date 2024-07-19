import React, { useState } from "react";
import { TextField, Button, InputAdornment, Box } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";

interface AddCityFormProps {
  onAddCity: (city: string) => void;
}

export default function AddCityForm({ onAddCity }: AddCityFormProps) {
  const [city, setCity] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (city.trim()) {
      onAddCity(city.trim());
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center">
        <TextField
          fullWidth
          label="Add a city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddLocationIcon />
              </InputAdornment>
            ),
            inputProps: {
              "data-testid": "add-city-input",
            },
          }}
          sx={{ mr: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          data-testid="add-city-button"
          sx={{
            height: "100%",
            padding: "12px",
            fontSize: "1rem",
            backgroundColor: "#00bcd4",
            "&:hover": {
              backgroundColor: "#0097a7",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </form>
  );
}
