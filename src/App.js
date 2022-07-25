import React, {useEffect, useState} from "react"
import { Routes, Route, Link} from "react-router-dom"
import Inicio from "./components/Carta.js"



const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
        </>
    )
}

export default App;
