import "./globals.css";

export const metadata = {
  title: "eSIM Global — Travel connected",
  description: "One eSIM for wherever your journey takes you. Launching soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
