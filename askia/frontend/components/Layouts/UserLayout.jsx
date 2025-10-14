import React from "react";
import Header from "../Common/Header";
import Main from "../Common/Main";
import Footer from "../Common/Footer";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
