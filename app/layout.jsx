import ThemeUtils from "@/utils/themeUtils"
import Header from "./components/header"
import { RouteAnimationContextProvider } from "@/context/RouteAnimationContext"
import { Analytics } from '@vercel/analytics/react';
import "bootstrap/dist/css/bootstrap.css"

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <head>
        <link rel="stylesheet" href="assets/css/globals.css" type="text/css" />
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