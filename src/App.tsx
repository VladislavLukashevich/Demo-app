import React from "react";
import "./App.scss";
import {Routes, BrowserRouter, Route} from "react-router-dom";
import {Calculator} from "./pages/calculator/calculator";
import {Quotes} from "./pages/quotes/quotes";
import {Navbar} from "./navbar/navbar";
import {Map} from "./pages/map/map";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route Component={Calculator} path={"/calculator"}> </Route>
                    <Route Component={Quotes} path={"/quotes"}> </Route>
                    <Route Component={Map} path={"/map"}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
