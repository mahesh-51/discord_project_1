import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { RouterProvider } from "react-router-dom";
import React from "react";
import AppContext from "../src/components/AppContext";
import router from "../src/config/routejs";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Home from './pages/Home';
import 'font-awesome/css/font-awesome.min.css';
import 'venobox/src/venobox.css';
import 'slick-carousel/slick/slick.css';
import 'aos/dist/aos.css';



function App() {
  return (
    <div className="App">
      {/* <AppContext.Provider>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider> */}
       <Header />
       <Home />
      <Footer />
  </div>
  );
}

export default App;
