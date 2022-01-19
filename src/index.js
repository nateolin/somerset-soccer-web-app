import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/about";
import Competitive from "./routes/competitive";
import FAQ from "./routes/faq";
import Rec from "./routes/rec";
import Register from "./routes/register";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="rec" element={<Rec />} />
        <Route path="competitive" element={<Competitive />} />
        <Route path="register" element={<Register />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
