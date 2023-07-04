"use client"

import { QueryClient, QueryClientProvider } from "react-query";
import "./blog.css";

const queryClient = new QueryClient()

export default function BlogLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="animated-section">{children}</section>
    </QueryClientProvider>
  );
}
