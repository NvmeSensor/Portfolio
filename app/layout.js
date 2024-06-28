import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./style.css"
import Footer from '../components/Footer'
import Navbar from "@/components/Navbar";

const jetmono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Priyanshu Chahar | Portfolio",
  description: "Priyanshu Chahar is a skilled MERN stack developer with expertise in MERN stack technologies. Get in touch for web development projects.",
  keywords: ["Priyanshu Chahar", "Full Stack Developer", "MERN Stack", "Web Development"],
  image: "preview.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className={jetmono.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}