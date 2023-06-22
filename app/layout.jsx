import ThemeUtils from "@/utils/themeUtils"
import Header from "./components/header"
import Script from 'next/script'

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
              </div>
            </div>
          </div>
        </div>

        <Script src="assets/js/jquery-2.1.3.min.js" />
        <Script src="assets/js/owl.carousel.min.js" />
        <Script src="assets/js/modernizr.custom.js" />
        {/* <Script src="assets/js/animating.js" /> */}
        <Script src="assets/js/imagesloaded.pkgd.min.js" />
        <Script src="assets/js/jquery.googlemap.js" />
        <Script src="assets/js/jquery.magnific-popup.min.js" />
        <Script src="assets/js/jquery.shuffle.min.js" />
        <Script src="assets/js/main.js" />
        <Script src="assets/js/masonry.pkgd.min.js" />
        <Script src="assets/js/perfect-scrollbar.min.js" />
        <Script src="assets/js/validator.js" />


      </body>
    </html>
  )
}