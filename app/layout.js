import { Montserrat } from "next/font/google";
import "./globals.css";
import "./style.css";
import Footer from '../components/Footer';

const mont = Montserrat({ subsets: ["latin"] });

const metadata = {
  title: "Priyanshu Chahar | Portfolio",
  description: "Priyanshu Chahar is a skilled MERN stack Developer. Contact Priyanshu for professional web development services and projects.",
  keywords: ["Priyanshu Chahar", "Priyannxhuu", "Priyanshu Chahar Devfolio", "Priyanshu Chahar Portfolio", "NvmeSensor", "Full Stack Developer", "MERN Stack", "Web Development"],
  openGraph: {
    type: "website",
    url: "https://priyanshuchahar.vercel.app",
    title: "Priyanshu Chahar | Portfolio",
    description: "Priyanshu Chahar is a skilled MERN stack Developer. Contact Priyanshu for professional web development services and projects.",
    image: "https://priyanshuchahar.vercel.app/profileimage.png",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://priyanshuchahar.vercel.app",
    title: "Priyanshu Chahar | Portfolio",
    description: "Priyanshu Chahar is a skilled MERN stack Developer. Contact Priyanshu for professional web development services and projects.",
    image: "https://priyanshuchahar.vercel.app/profileimage.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:url" content={metadata.twitter.url} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta property="twitter:description" content={metadata.twitter.description} />
        <meta property="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={mont.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}