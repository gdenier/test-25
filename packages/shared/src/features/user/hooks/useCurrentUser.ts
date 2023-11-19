import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User, useAuth } from "../../auth";

export const useCurrentUser = (): UseQueryResult<User> => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["users", user?.id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/users?id=${user?.id}`).then(
        async (res) => (await res.json())[0]
      ),
    enabled: !!user,
  });
};
