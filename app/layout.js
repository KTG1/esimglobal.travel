import "./globals.css";

export const metadata = {
  title: "Compare Global eSIM Plans for International Travel | eSIM Global",
  description: "Compare prepaid travel eSIM plans, providers, data, validity and prices for 190+ countries. Find the best international eSIM before you travel.",
  keywords: ["global eSIM", "international eSIM", "travel eSIM", "compare eSIM plans", "prepaid eSIM", "eSIM for international travel"],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: { canonical: "https://esimglobal.travel/" },
  openGraph: {
    title: "Compare Global eSIM Plans for International Travel",
    description: "Compare travel eSIM providers, coverage and prices across 190+ destinations.",
    url: "https://esimglobal.travel/",
    siteName: "eSIM Global Travel",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
