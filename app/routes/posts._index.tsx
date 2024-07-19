import { useMatches } from "@remix-run/react";
import PostList from "~/components/PostList";
import { PostData } from "~/types";
import { Container, Grid, Typography } from "@mui/material";

export default function PostsLandingPage() {
  const matches = useMatches();

  const posts = matches[1].data as PostData[];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Posts
      </Typography>
      <Grid container spacing={4} marginTop={4}>
        <PostList posts={posts} />
      </Grid>
    </Container>
  );
}
