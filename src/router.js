import React from "react";
import {Routes, Route} from "react-router-dom";

import Users from "./components/Users";
import Posts from "./components/Posts";

export default (
    <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/posts/:id" element={<Posts />} />
    </Routes>
);