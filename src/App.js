import "./App.css";
import { Route, Routes } from "react-router-dom";

import Haptic from "./components/haptic/haptic";
import Home from "./components/Home/home";
import Courses from "./components/courses/courses";
import Foundation from "./components/foundation/foundation";
import About from "./components/about/about";
import Blog from "./components/blog/blog";
import IPhone from "./components/iphone/iphone";
import Design from "./components/design/design";
import Figma from "./components/figma/figma";
import Pattern from "./components/pattern/pattern";
import Ux from "./components/ux/ux";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/foundation" element={<Foundation />} />
      <Route path="/haptic" element={<Haptic />} />
      <Route path="/dizayn" element={<Design />} />
      <Route path="/iphone" element={<IPhone />} />
      <Route path="/figma" element={<Figma />} />
      <Route path="/naqsh" element={<Pattern />} />
      <Route path="/ux" element={<Ux />} />

      <Route path="*" element={<p>Not found 404</p>} />
    </Routes>

    // <div>
    //   {/* <Home /> */}
    //   {/* <Courses /> */}
    //   {/* <Foundation/> */}
    //   {/* <About /> */}
    //   {/* <Blog /> */}
    //   <Haptic />
    // </div>
  );
}

export default App;
