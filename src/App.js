import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Recommend from "./pages/Recommend";
import About from "./pages/About";
import History from "./pages/History";
import Communication from "./pages/Communication";
import Comments from "./pages/Comments";
import Header from "./components/header/Header";
import Footer from "./components/Footer";


function App() {
    const headItems = [
        {
            id: "recommend",
            value: "今日推荐",
            path: "/"
        },
        {
            id: "history",
            value: "过往文章",
            path: "/history"
        },
        {
            id: "communication",
            value: "交流体会",
            path: "/communication"
        },
        {
            id: "comment",
            value: "评论精选",
            path: "/comment"
        },
        {
            id: "about",
            value: "关于我们",
            path: "/about"
        }
    ];

    return (
        <BrowserRouter>
            <Header headItems={headItems}></Header>
            <Routes>
                <Route path="/" element={<Recommend/>}/>
                <Route path="/history" element={<History/>}></Route>
                <Route path="/communication" element={<Communication/>}></Route>
                <Route path="/comment" element={<Comments/>}></Route>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;
