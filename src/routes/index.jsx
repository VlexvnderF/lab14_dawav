import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, LoginView, SignupView } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>} />
                <Route path="/login" element={<LoginView/>} />
                <Route path="/register" element={<SignupView/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;