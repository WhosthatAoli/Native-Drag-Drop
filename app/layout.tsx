import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./layoutComponents/navbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Native DND Template",
  description: "Native Drag and Drop with React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <DndProvider backend={HTML5Backend}> */}
      <body className={inter.className}>
        <div className="background-container"></div>
        <Navbar />
        {children}
      </body>
      {/* </DndProvider> */}
    </html>
  );
}
