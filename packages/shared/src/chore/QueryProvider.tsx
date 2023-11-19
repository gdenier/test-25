import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactElement, ReactNode } from "react";

const queryClient = new QueryClient();

export const QueryProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement | null => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
