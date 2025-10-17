import "@/app/globals.css";
import Navbar from "@/shared/Navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          { children }
        </main>
      </body>
    </html>
  )
}

export default RootLayout
