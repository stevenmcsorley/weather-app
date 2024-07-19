import Post from "~/components/Post";
import { useLoaderData, useMatches } from "@remix-run/react";
import { PostData } from "~/types";

export async function loader({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return slug;
}

export default function SinglePost() {
  const slug = useLoaderData<string>();
  const matches = useMatches();
  const posts = matches[1].data as PostData[];

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <Post posts={post} />;
}
