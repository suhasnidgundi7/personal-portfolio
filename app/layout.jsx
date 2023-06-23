import ThemeUtils from "@/utils/themeUtils"
import Header from "./components/header"
import Script from 'next/script'
import { RouteAnimationContextProvider } from "@/context/RouteAnimationContext"
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <head>
        {/* CSS Imports */}
        <link rel="stylesheet" href="assets/css/reset.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/bootstrap-grid.min.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/animations.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/perfect-scrollbar.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" type="text/css" />
        <ThemeUtils />
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
                  <div className="animated-section animated-section-moveFromTop">
                    {children}
                    <Analytics />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RouteAnimationContextProvider>
      </body>
    </html>
  )
}