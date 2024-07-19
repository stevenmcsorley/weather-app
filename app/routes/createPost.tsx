import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import fs from "fs";
import path from "path";

import data from "../data.json";

import { PostData } from "../types";

export async function action({ request }: { request: Request }) {
  await fakeDelay(15000);
  const body = await request.formData();
  const title = body.get("title");
  const content = body.get("content");
  const slug = body.get("slug");
  const userid = body.get("userid");

  const author = "Jon Snow";
  const createdAt = new Date().toISOString();
  const id = data.length + 1;

  const errors: Partial<PostData> = {};

  if (!title || title == null || title == "") {
    errors.title = "Title is required";
  }

  if (!content || content == null || content == "") {
    errors.content = "Content is required";
  }

  if (!slug || slug == null || slug == "") {
    errors.slug = "Slug is required";
  }

  if (!userid || userid == null || userid == "") {
    errors.userid = "User Id is required";
  }
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  const newPost = {
    id: id,
    title: title,
    content: content,
    slug: slug,
    userid: userid,
    author: author,
    date: createdAt,
  };

  const newData = [...data, newPost];

  try {
    console.log("Writing to file");
    const filePath = path.join(process.cwd(), "app", "data.json");
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
  } catch (error) {
    console.error(error);
  }

  return json({ success: true });
  // return redirect("/posts");
}

function fakeDelay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function spinner() {
  return (
    <div>
      <h1>Submitting...</h1>
    </div>
  );
}

export default function CreatePost() {
  const actionData = useActionData();
  // console.log(actionData);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation();

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Create Post
              </Typography>
              <Form method="post">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="User Id"
                      type="number"
                      id="userid"
                      name="userid"
                      variant="outlined"
                    />
                    {actionData?.errors?.userid && (
                      <Typography color="error">
                        {actionData.errors.userid
                          ? actionData.errors.userid
                          : null}
                      </Typography>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="slug"
                      type="text"
                      id="slug"
                      name="slug"
                      variant="outlined"
                      required
                    />
                    {actionData?.errors?.slug && (
                      <Typography color="error">
                        {actionData.errors.slug ? actionData.errors.slug : null}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Title"
                      type="text"
                      id="title"
                      name="title"
                      variant="outlined"
                    />
                    {actionData?.errors?.title && (
                      <Typography color="error">
                        {actionData.errors.title
                          ? actionData.errors.title
                          : null}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Content"
                      multiline
                      rows={4}
                      id="content"
                      name="content"
                      variant="outlined"
                    />
                    {actionData?.errors?.content && (
                      <Typography color="error">
                        {actionData.errors.content
                          ? actionData.errors.content
                          : null}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{
                        display:
                          navigation.state === "submitting" ? "none" : "block",
                      }}
                    >
                      Create Post
                    </Button>
                    {navigation.state === "submitting" ? spinner() : null}
                  </Grid>
                </Grid>
              </Form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
