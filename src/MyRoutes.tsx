import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import Contact from "./components/Contact/Contact";
import Service from "./components/Service/Service";
import Price from "./components/Price/Price";

const MyRoutes  = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Price" element={<Price/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes