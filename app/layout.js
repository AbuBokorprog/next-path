import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer";
import AuthProvider from "@/utils/auth_provider";
import Navbar from "@/components/shared/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.className} mx-auto container px-2 lg:px-20`}>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
