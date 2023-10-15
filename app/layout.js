import "./globals.css";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Popup Shop",
  description: "Popup Shop Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
