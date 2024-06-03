import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Nav";
import { ThemeProviders } from "./theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joel Bello - Software Developer",
  description: "A developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <head>
      </head>
      <body className="antialiased w-full flex flex-col items-center bg-gray-50 dark:bg-gradient-to-l from-gray-900 to-slate-900">
      <ThemeProviders>
        <div className="md:shadow-md max-w-6xl w-full md:w-7/12 pt-6 px-10 md:px-20 bg-white dark:bg-gray-800 h-screen">
      <Navbar />
        <main>
          {children}
        </main>
        </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
