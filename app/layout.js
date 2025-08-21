import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // ensure fallback fonts render immediately
});

const ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "Nouman Saeed Full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
