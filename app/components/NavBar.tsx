import { NavLink, Form } from "@remix-run/react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

// Styled component for active link
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  margin: theme.spacing(1),
  "&.active": {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
}));

interface NavBarProps {
  userId: string | null;
  username: string | null; // Add username prop
}

export default function NavBar({ userId, username }: NavBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WeatherApp
        </Typography>
        <Button color="inherit">
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </Button>
        <Button color="inherit">
          <StyledNavLink to="/posts" prefetch="intent">
            Posts
          </StyledNavLink>
        </Button>
        <Button color="inherit">
          <StyledNavLink to="/createPost">Create Post</StyledNavLink>
        </Button>
        <Button color="inherit">
          <StyledNavLink to="/weather">Weather</StyledNavLink>
        </Button>
        {userId ? (
          <>
            <Typography variant="body1" sx={{ ml: 2, mr: 2 }}>
              Welcome, {username || userId} {/* Display username or userId */}
            </Typography>
            <Form method="post" action="/logout">
              <Button color="inherit" type="submit">
                Logout
              </Button>
            </Form>
          </>
        ) : (
          <Button color="inherit">
            <StyledNavLink to="/login">Login</StyledNavLink>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
