import { Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useCurrentUserPosts } from "shared";

export const Posts = (): ReactElement | null => {
  const { data: posts } = useCurrentUserPosts();
  return (
    <Stack px={2} gap={6} overflow="auto">
      {posts?.map((post) => (
        <Stack key={post.id}>
          <Typography component="h2" variant="h4">
            {post.title}
          </Typography>
          <Typography>{post.body}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
