import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Assignment Help",
  description: "Help Students in their assignments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
