import { Card, CardContent, Typography } from "@mui/material";

export default function EmptySlotCard() {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "#fff",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="p">
          Add a city to display weather information
        </Typography>
      </CardContent>
    </Card>
  );
}
