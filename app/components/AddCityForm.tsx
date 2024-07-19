import React, { useState } from "react";
import { Grid, TextField, Button, InputAdornment } from "@mui/material";
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
      <Grid container spacing={2}>
        <Grid item xs={8}>
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
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add City
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
