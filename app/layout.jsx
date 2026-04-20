import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxury cabins in the heart of nature. Book your stay at The Wild Oasis today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          josefin.className +
          " bg-primary-950 text-primary-100 antialiased min-h-screen flex flex-col relative"
        }
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
