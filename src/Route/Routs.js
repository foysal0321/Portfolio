import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import About from "../components/Home/About";
import Klassy from "../components/Home/DetailsProjexts/Klassy";
import Proedu from "../components/Home/DetailsProjexts/Proedu";
import Watch from "../components/Home/DetailsProjexts/Watch";
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
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/watch',
                element: <Watch />
            },
            {
                path: '/klassy',
                element: <Klassy />
            },
            {
                path: '/proedu',
                element: <Proedu />
            },
            
        ]
    }
])