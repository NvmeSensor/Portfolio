import { Montserrat } from "next/font/google";
import "./globals.css";
import "./style.css"
import Footer from '../components/Footer'
import Navbar from "@/components/Navbar";

const mont = Montserrat({ subsets: ["latin"] });

const metadata = {
  title: "Priyanshu Chahar | Portfolio",
  description: "Priyanshu Chahar is a skilled MERN stack developer with expertise in MongoDB, Express.js, React.js, and Node.js. Contact Priyanshu for professional web development services and projects.",
  keywords: ["Priyanshu Chahar", "Priyannxhuu", "NvmeSensor", "Full Stack Developer", "MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Web Development"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Priyanshu Chahar | Portfolio</title>
        <meta name="title" content="Priyanshu Chahar | Portfolio" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://priyanshuchahar.vercel.app" />
        <meta property="og:title" content="Priyanshu Chahar | Portfolio" />
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:image" content="https://priyanshuchahar.vercel.app/profileimage.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://priyanshuchahar.vercel.app" />
        <meta property="twitter:title" content="Priyanshu Chahar | Portfolio" />
        <meta property="twitter:description" content={metadata.description}/>
        <meta property="twitter:image" content="https://priyanshuchahar.vercel.app/profileimage.png" />
      </head>
      <body className={mont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}