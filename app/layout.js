import "./globals.css";

export const metadata = {
  title: "For Gunjan 🤍",
  description: "A little something for Gunjan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
