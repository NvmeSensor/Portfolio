import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css"
import Footer from '../components/Footer'

const syne = Inter({ subsets: ["latin"] });

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
      <body className={syne.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
