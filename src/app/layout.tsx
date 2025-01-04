import type { Metadata } from "next";

import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeProvider from "@/theme";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "",
};

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            {children}
            <ToastContainer
              position="top-right"
              newestOnTop={true}
              closeOnClick={false}
            />
          </ThemeProvider>
          </AppRouterCacheProvider>
        </Suspense>
      </body>
    </html>
  );
}
