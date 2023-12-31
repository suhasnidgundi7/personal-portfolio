import Header from "./components/header";
import { GlobalContextProvider } from "@/context/GlobalContext";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css"
import "@/public/assets/css/reset.css"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/public/assets/css/icon-font.min.css";
import "@/public/assets/css/fonts/fontawesome6/css/all.min.css";

export const metadata = {
  title: "Personal Portfolio | Suhas Nidgundi",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          {/* Animated Background */}
          <div
            className="lm-animated-bg"
            style={{ backgroundImage: "url(assets/images/main_bg.png)" }}
          ></div>
          {/* /Animated Background */}

          <div className="page">
            <div className="page-content">
              <Header />
              <div className="content-area">
                <div className="animated-sections">
                  {children}
                  <Analytics />
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
