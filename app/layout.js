import "./globals.css";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";

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
    <html lang="en" className="scroll-smooth h-full">
      {/* leading8 will give line height to all text component */}
      <body
        suppressHydrationWarning
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden relative min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
