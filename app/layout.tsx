import type { Metadata } from "next";
import "./globals.css";
import { ScrollProvider } from "./components/ScrollProvider";
import LoadingBar from "./components/LoadingBar";
import LoadingOverlay from "./components/LoadingOverlay";
import ScrollIndicator from "./components/ScrollIndicator";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "WAICA Re Capital Ltd",
  description: "We value your investments - Fund Management, Corporate Finance, Research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </head>
      <body className="antialiased">
        <ScrollProvider>
          <LoadingBar />
          <LoadingOverlay />
          <ScrollIndicator />
          <BackToTop />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}

