import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Snipp",
    template: "%s | Snipp",
  },
  description:
    "Articulating our voice and connecting with you on our vibrant Content Hub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
