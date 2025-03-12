import { Outlet } from "react-router-dom";
import Header from "../Components/PresentationalComponents/Header";
import Footer from "../Components/PresentationalComponents/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
