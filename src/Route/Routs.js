import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/contact/Contact";
import About from "../components/Home/About";
import Home from "../components/Home/Home";
import Main from "../lyout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            
        ]
    }
])