import "./globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export const metadata = {
  title: "Airbnb",
  description: "This is the Airbnb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
