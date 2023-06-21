import Header from "./components/header"


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
        <link rel="stylesheet" href="assets/css/main.css" type="text/css" />
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
      </body>
    </html>
  )
}