import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Tooltip, Button } from "@material-tailwind/react";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
            <Tooltip content="material-tailwind">
                <Button>Show Tooltip</Button>
            </Tooltip>
        </div>
    );
}

export default App;
