import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Bottombar from "../components/shared/Bottombar";
import Header from "../components/shared/Header";
import Provider from "../utils/Provider";
import { GlobalContextProvider } from "../context/store";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display:"swap"
});

export const metadata: Metadata = {
  title: "E-shop",
  description: "E-commerce app", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-xs`}>
        <Provider>
          <GlobalContextProvider>
            <Header />
            <main>{children}</main>
            <Bottombar />
          </GlobalContextProvider>
        </Provider>
      </body>
    </html>
  );
}
