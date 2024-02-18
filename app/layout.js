import { k2d } from "./components/fonts";
import "./globals.css";

export const metadata = {
  title: "emalderete's device",
  description: "Hello, I am Emanuel Alderete, Fullstack Developer. Let me show you some amazing things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${k2d.className} antialiased`}>{children}</body>
    </html>
  );
}
