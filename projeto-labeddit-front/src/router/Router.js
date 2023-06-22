import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { PostPage } from "../pages/PostPage";
import { AppProvider } from "../context/AppContext";



export const Router = () => {
    return (
        <BrowserRouter>
        <AppProvider>
        <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/post" element={<PostPage/>} />
        

        </Routes>
        </AppProvider> 
        </BrowserRouter>
    )
}