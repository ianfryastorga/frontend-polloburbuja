import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import Rules from "./game/rules.jsx"
import Play from "./game/play.jsx"
import AboutUs from "./aboutus.jsx"
import Rank from "./user/rank.jsx"
import Login from "./user/login.jsx"
import Register from "./user/register.jsx"
import CreateGame from "./game/create_game.jsx"
import JoinGame from "./game/join_game.jsx"
import Tablero from "./game/tablero.jsx"

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
                <Route path="/create_game" element={<CreateGame/>} />
                <Route path="/join_game" element={<JoinGame/>} />
                <Route path="/tablero" element={<Tablero/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing