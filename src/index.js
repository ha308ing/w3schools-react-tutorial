import ReactDOM from "react-dom/client";
import React from "react";
import "bulma";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Memo from "./pages/Memo";
import Hooks from "./pages/Hooks";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cars" element={<Cars />} />
                    <Route path="memo" element={<Memo />} />
                    <Route path="hooks" element={<Hooks />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
