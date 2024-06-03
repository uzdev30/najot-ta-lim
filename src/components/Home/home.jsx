import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Content from "../content/content";
import Hero from "../hero/hero";
import Wrapp from "../wrapp/wrapp";
import Wrapper from "../wrapper/wrapper";
import Aside from "../aside/aside";
import Article from "../article/article";
import Sidebar from "../sidebar/sidebar";
function Home() {
  return (
    <div className="container mx-auto p-[20px] ">
      <div className="bg-bg">
        <div className="bg-boy bg-contain bg-no-repeat bg-right ">
          <Header />
          <Content />
        </div>
      </div>
      <Hero />
      <Wrapp />
      <Wrapper />
      <Aside />
      <Article />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Home;
