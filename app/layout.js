import "./globals.css";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";

const outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "Nouman Saeed Full stack developer",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth h-full" suppressHydrationWarning>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden min-h-screen min-h-[100dvh]`}>
        {children}
      </body>
    </html>
  );
}
