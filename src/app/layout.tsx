import "./globals.css";
import NavBar from "../Components/navBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="pt-3 lg:pt-20">{children}</div>
      </body>
    </html>
  );
}
