import { Inter } from "next/font/google";
import '@/styles/globals.css'
import  Nav  from "@components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobFinder - เว็บไซต์หางาน การจ้างงาน",
  description: "",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav>
          {children}
        </Nav>
      </body>
    </html>
  );
}
