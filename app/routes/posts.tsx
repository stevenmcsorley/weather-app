import { Outlet } from "@remix-run/react";
import posts from "../data.json";

export const meta = () => [
  { title: "Posts" },
  { description: "A list of all posts" },
];

export async function loader() {
  return posts;
}

export default function PostsParent() {
  return (
    <>
      <Outlet />
    </>
  );
}
