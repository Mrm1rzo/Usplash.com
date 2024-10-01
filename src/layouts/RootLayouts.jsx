// import React-Router-Dom
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../companents";

// import companents

const RootLayouts = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayouts;
