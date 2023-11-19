import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useAuth } from "../../auth";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useCurrentUserPosts = (): UseQueryResult<Post[]> => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["posts", "user", user?.id],
    queryFn: () =>
      fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user?.id}`
      ).then(async (res) => await res.json()),
    enabled: !!user,
  });
};
