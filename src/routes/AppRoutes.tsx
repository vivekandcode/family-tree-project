import { Route, Routes } from "react-router";
import AppLayout from "../components/layout";
import Home from "../pages/home";

function AppRoutes() {
    return (

        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes