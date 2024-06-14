import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { AppProvider } from "@/context/AppContext";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Macramé et Macération",
    template: "%s |  Macramé & Macération",
    absolute: "",
  },
  description: "Planifiez une soirée Macramé et Macération",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body>
        <AppProvider>
          <ThemeProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
