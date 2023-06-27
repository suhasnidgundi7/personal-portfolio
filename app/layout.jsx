import Header from "./components/header"
import { RouteAnimationContextProvider } from "@/context/RouteAnimationContext"
import { Analytics } from '@vercel/analytics/react';
import "bootstrap/dist/css/bootstrap.css"
import Script from "next/script";

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <head>
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
                  <div className="animated-section animated-section-moveFromTop">
                    {children}
                    <Analytics />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RouteAnimationContextProvider>

        <Script src="assets/js/jquery-2.1.3.min.js" />
        <Script src="assets/js/owl.carousel.min.js" />
        <Script src="assets/js/modernizr.custom.js" />
        <Script src="assets/js/animating.js" />
        {/* <Script src="assets/js/animating.js" /> */}
        <Script src="assets/js/imagesloaded.pkgd.min.js" />
        <Script src="assets/js/jquery.googlemap.js" />
        <Script src="assets/js/jquery.magnific-popup.min.js" />
      </body>
    </html>
  )
}