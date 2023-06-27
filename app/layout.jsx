import Header from "./components/header";
import { RouteAnimationContextProvider } from "@/context/RouteAnimationContext";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Personal Portfolio | Suhas Nidgundi",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="assets/css/reset.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/light.css" type="text/css" />
      </head>
      <body>
        <RouteAnimationContextProvider>
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
        </RouteAnimationContextProvider>
      </body>
    </html>
  );
}
