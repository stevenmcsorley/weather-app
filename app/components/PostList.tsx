import { PostData } from "~/types";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

export default function PostList({ posts }: { posts: PostData[] }) {
  const post = posts.sort((a, b) => {
    return b.id - a.id;
  });
  return (
    <Container>
      <Grid container spacing={4}>
        {post.length === 0 && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  No posts found
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} md={post.id < posts.length ? 6 : 12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  <Link href={`/posts/${post.slug}`} underline="none">
                    {post.title}
                  </Link>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.subtitle}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.content}
                </Typography>
                <div>
                  <Typography variant="caption" color="textSecondary">
                    {post.author}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    style={{ marginLeft: "1rem" }}
                  >
                    {post.date}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
