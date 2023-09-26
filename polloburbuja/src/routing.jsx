import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import Rules from "./game/rules.jsx"
import Play from "./game/play.jsx"
import AboutUs from "./game/about_us/aboutus.jsx"
import Rank from "./user/rank.jsx"
import Login from "./user/login.jsx"
import Register from "./user/register.jsx"

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/rules" element={<Rules/>} />
                <Route path="/play" element={<Play/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/rank" element={<Rank/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing