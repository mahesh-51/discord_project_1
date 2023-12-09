import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom";
import React from "react";
import AppContext from "../src/components/AppContext";
import router from "../src/config/routejs";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";


function App() {
  return (
    <div className="App">
      {/* <AppContext.Provider>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider> */}
       <Header />
      
      <Footer />
  </div>
  );
}

export default App;
