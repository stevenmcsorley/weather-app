import { useState } from "react";
import { json, redirect } from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { getSession, commitSession } from "../sessions";
import prisma from "../prismaClient";
import bcrypt from "bcryptjs";

export const action = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");

  if (typeof username !== "string" || typeof password !== "string") {
    return json({ error: "Invalid form submission" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const session = await getSession(request.headers.get("Cookie"));
      session.set("userId", user.id);

      return redirect("/weather", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }

    return json({ error: "Invalid username or password" });
  } catch (error) {
    console.error("Prisma error:", error);
    return json({ error: "An error occurred. Please try again later." });
  }
};

export default function Login() {
  const actionData = useActionData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Form method="post">
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Form>
      {actionData?.error && (
        <Typography color="error">{actionData.error}</Typography>
      )}
    </Container>
  );
}
