import "./globals.css";
import { Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Popup Shop",
  description: "Popup Shop Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
