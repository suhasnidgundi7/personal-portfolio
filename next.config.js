const withFonts = require("next-fonts");

module.exports = withFonts({
  enableSvg: true,
  fonts: {
    loader: "default",
    path: "https://fonts.googleapis.com/css?family=Poppins:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i",
  },
});
