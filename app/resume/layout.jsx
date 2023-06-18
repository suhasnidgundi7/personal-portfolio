export const metadata = {
    title: 'Resume',
    description: '',
  }
   
  export default function RootLayout({ children }) {
   return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  