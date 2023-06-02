/** @format */

import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Cards from "../components/Card";

function Home() {
  document.title = "DeweTour | Home";
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Cards />
      <Footer />
    </>
  );
}
export default Home;
