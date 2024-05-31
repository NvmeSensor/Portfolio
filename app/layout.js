import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "./style.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Priyanshu Chahar | Portfolio",
  description: "Priyanshu Chahar is a skilled MERN stack developer with expertise in MERN stack technologies. Get in touch for web development projects.",
  keywords: ["Priyanshu Chahar", "Full Stack Developer", "MERN Stack", "Web Development"],
  image: "https://example.com/link-preview-image.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}