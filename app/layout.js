import "./globals.css";
import { Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Popup Shop",
  description: "Popup Shop Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
