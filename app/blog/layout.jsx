export const metadata = {
    title: 'Blog',
    description: '',
  }
   
  export default function RootLayout({ children }) {
   return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  