import { PostData } from "~/types";
import { Card, CardContent, Typography, Link, Grid } from "@mui/material";

export default function Post({ posts }: { posts: PostData }) {
  return (
    <Grid item xs={12} md={posts.id > 1 ? 6 : 12}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link href={`/posts/${posts.slug}`} underline="none">
              {posts.title}
            </Link>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {posts.subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {posts.content}
          </Typography>
          <div>
            <Typography variant="caption" color="textSecondary">
              {posts.author}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ marginLeft: "1rem" }}
            >
              {posts.date}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
