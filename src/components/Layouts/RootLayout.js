import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
